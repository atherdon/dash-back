/**
 * Object of GraphQL resolvers.
 * All non graphql types from database must will serialized,
 * for example 'created'{DateTime} return as 'created.toISOString()'{string}
 */

import * as resolvers from './resolvers';
import withAuth from '../middlewares/hooks/withAuth';

const Resolvers = {
  Query: {
    // Get many
    getManyBrand: resolvers.brand.getMany,
    getManyAuthor: resolvers.author.getMany,
    getManyEditor: resolvers.editor.getMany,
    // Get one
    getOneUser: withAuth(
      {
        minRole: 1,
        roles: [0], // That will be ignored, because minRole is 1
        selfSchema: 'user',
      },
      resolvers.user.getOne
    ),
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
    updateOneUser: withAuth(
      {
        minRole: 1,
        selfSchema: 'user',
        nonRenewable: ['role'], // If set selfSchema and its resolved bud user role not resolved with minRole that this fields will be secure for change
      },
      resolvers.user.updateOne
    ),
    // Delete one
    deleteOneUser: withAuth(
      {
        minRole: 2,
      },
      resolvers.user.deleteOne
    ),
    deleteOneBrand: resolvers.brand.deleteOne,
    deleteOneAuthor: resolvers.author.deleteOne,
    deleteOneEditor: resolvers.editor.deleteOne,
  },
};

export default Resolvers;
