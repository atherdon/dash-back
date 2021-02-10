/**
 * Object of GraphQL resolvers.
 * All non graphql types from database must will serialized,
 * for example 'created'{DateTime} return as 'created.toISOString()'{string}
 */

import * as resolvers from './resolvers';

const Resolvers = {
  Query: {
    // Get many
    getManyBrand: resolvers.brand.getMany,
    getManyAuthor: resolvers.author.getMany,
    getManyEditor: resolvers.editor.getMany,
    // Get one
    getOneUser: resolvers.user.getOne,
    getOneBrand: resolvers.brand.getOne,
    getOneAuthor: resolvers.author.getOne,
    getOneEditor: resolvers.editor.getOne,
  },
  Mutation: {
    // User mutations
    registration: resolvers.user.registration,
    login: resolvers.user.login,
    // Post one
    postOneBrand: resolvers.brand.postOne,
    postOneAuthor: resolvers.author.postOne,
    postOneEditor: resolvers.editor.postOne,
    // Update one
    updateOneBrand: resolvers.brand.updateOne,
    updateOneAuthor: resolvers.author.updateOne,
    updateOneEditor: resolvers.editor.updateOne,
    // Delete one
    deleteOneBrand: resolvers.brand.deleteOne,
    deleteOneAuthor: resolvers.author.deleteOne,
    deleteOneEditor: resolvers.editor.deleteOne,
  },
};

export default Resolvers;
