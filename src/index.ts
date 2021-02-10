import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import Schema from './graphql/Schema';
dotenv.config();
import * as middlewares from './middlewares';
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
const PORT = 4000;

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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let messObj: any;
    // Get custom error object
    try {
      messObj = JSON.parse(e.message);
    } catch (e) {
      messObj = e;
    }
    const { code, status, message } = messObj;
    // Server error from resolver
    if (status && status !== 'warning') {
      lib.Console.error(message || e.message, e, new Error('Server error'));
    }
    const error: T.ErrorsItem = {
      code: code ? code : 502,
      status: status ? status : 'error',
      message: message ? message : 'Something went wrong',
      stdErrMessage: lib.isDev() ? e.message : 'Standard error is not available in production',
    };
    return error;
  },
});
const app = express();
// Enable body parser
app.use(server.graphqlPath, bodyParser.json({ limit: '1mb' }));
// Auth middleware
app.use(server.graphqlPath, middlewares.auth);
server.applyMiddleware({
  app,
  cors: { credentials: true, origin: lib.isDev() ? '*' : CORS_ORIGIN },
});

app.listen({ port: PORT }, () =>
  lib.Console.info(`Server ready at http://localhost:${PORT}${server.graphqlPath}`)
);
