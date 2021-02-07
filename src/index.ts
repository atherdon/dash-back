import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import Schema from './graphql/Schema';
dotenv.config();
import Resolvers from './graphql/Resolvers';
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
  // @ts-ignore
  formatError: (e) => {
    return {
      status: 'error',
      message: 'Something went wrong',
      stdErrMessage: e.message,
    };
  },
});
const app = express();
// Enable body parser
app.use(server.graphqlPath, bodyParser.json({ limit: '1mb' }));

server.applyMiddleware({
  app,
  cors: { credentials: true, origin: lib.isDev() ? '*' : CORS_ORIGIN },
});

app.listen({ port: PORT }, () =>
  lib.Console.info(`Server ready at http://localhost:${PORT}${server.graphqlPath}`)
);
