import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import { spawn } from 'child_process';
import proxy from 'express-http-proxy';
import Schema from './graphql/Schema';
dotenv.config();
import Resolvers from './graphql/Resolver';
import * as lib from './lib';
import * as T from './types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const env: any = process.env;
const { CORS_ORIGIN }: T.Env = env;
/**
 * GraphQL server port
 * Dependency: schema [codegen.yml]
 */
const PORT = 5000;

const server = new ApolloServer({
  typeDefs: Schema,
  resolvers: Resolvers,
  context: ({req}) => {
    return {
      headers: req.headers,
    };
  },
  // @ts-ignore
  formatError: (e) => {
    if (lib.isDev()) {
      console.error(e);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let messObj: any;
    // Get custom error object
    try {
      messObj = JSON.parse(e.message);
    } catch (e) {
      messObj = e;
    }
    const { code, status, errMess, stdMessage } = messObj;
    // Server error from resolver
    if (status && status !== 'warning') {
      lib.Console.error(errMess || e.message, e, new Error('Server error'));
    }
    let stdErrMessage = stdMessage ? stdMessage : e.message;
    stdErrMessage = lib.isDev() ? stdErrMessage : 'Standard error is not available in production';
    const error: T.ErrorsItem = {
      code: code ? code : 502,
      status: status ? status : 'error',
      message: errMess ? errMess : 'Something went wrong',
      stdErrMessage,
    };
    return error;
  },
});
const app = express();
// Enable body parser
app.use(server.graphqlPath, bodyParser.json({ limit: '1mb' }));
// Enable cors
app.use(
  cors({
    credentials: true,
    origin: lib.isDev() ? '*' : CORS_ORIGIN,
  })
);
const yarn = spawn('yarn', ['studio', '--browser', 'none']);
yarn.on('error', (e) => {
  console.log(1, e);
});
yarn.on('message', (e) => {
  console.log(2, e);
});
yarn.on('close', (e) => {
  console.log(3, e);
});
app.use('/studio', proxy('http://localhost:5555'));
app.post('/api', (req, res) => res.redirect('http://localhost:5555/api'));
app.get('/*.js.?*', (req, res) => res.redirect(`http://localhost:5555${req.path}`));
app.get('/*.css.?', (req, res) => res.redirect(`http://localhost:5555${req.path}`));
app.get('/fonts/*', (req, res) => res.redirect(`http://localhost:5555${req.path}`));

server.applyMiddleware({
  path: '/',
  app,
});

app.listen(process.env.PORT || PORT, async () => {
  lib.Console.info(`Server ready at http://localhost:${PORT}${server.graphqlPath}`);
});
