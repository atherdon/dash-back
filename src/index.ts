import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import Schema from './graphql/Schema';
import Resolvers from './graphql/Resolvers';
import * as lib from './lib';
import * as T from './types';

/**
 * GraphQL server port
 * Dependency: schema [codegen.yml]
 */
const PORT = 4000;

const server = new ApolloServer({ typeDefs: Schema, resolvers: Resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: PORT }, () =>
  lib.Console.info(`Server ready at http://localhost:${PORT}${server.graphqlPath}`)
);
