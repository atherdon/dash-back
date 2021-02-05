/**
 * Object of GraphQL resolvers.
 * All non graphql types from database must will serialized,
 * for example 'created'{DateTime} return as 'created.toISOString()'{string}
 */

import * as resolvers from './resolvers';

const Resolvers = {
  Query: {
    getBrands: resolvers.brands.getBrands,
  },
  Mutation: {
    postBrand: resolvers.brands.postBrand,
  },
};

export default Resolvers;
