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
    getManyClicksPosition: resolvers.clicksPosition.getMany,
    getManyAppearance: resolvers.appearance.getMany,
    getManyExpandable: resolvers.expandable.getMany,
    getManyArticle: resolvers.article.getMany,
    getManyTopAuthor: resolvers.topAuthor.getMany,
    getManyEditor: resolvers.editor.getMany,
    getManyFilter: resolvers.filter.getMany,
    // Get one
    getOneFilter: resolvers.filter.getOne,
    getOneClicksPosition: resolvers.clicksPosition.getOne,
    getOneAppearance: resolvers.appearance.getOne,
    getOneUser: withAuth(
      {
        minRole: 1,
        roles: [0], // That will be ignored, because minRole is 1
        selfSchema: 'user',
      },
      resolvers.user.getOne
    ),
    getOneExpandable: resolvers.expandable.getOne,
    getOneArticle: resolvers.article.getOne,
    getOneBrand: resolvers.brand.getOne,
    getOneTopAuthor: resolvers.topAuthor.getOne,
    getOneEditor: resolvers.editor.getOne,
  },
  Mutation: {
    // User mutations
    registration: resolvers.user.registration,
    login: resolvers.user.login,
    // Post one
    postOneArticle: resolvers.article.postOne,
    postOneClicksPosition: resolvers.clicksPosition.postOne,
    postOneAppearance: resolvers.appearance.postOne,
    postOneFilter: resolvers.filter.postOne,
    postOneExpandable: resolvers.expandable.postOne,
    postOneBrand: resolvers.brand.postOne,
    postOneTopAuthor: resolvers.topAuthor.postOne,
    postOneEditor: resolvers.editor.postOne,
    // Update one
    updateOneFilter: resolvers.filter.updateOne,
    updateOneClicksPosition: resolvers.clicksPosition.updateOne,
    updateOneAppearance: resolvers.appearance.updateOne,
    updateOneArticle: resolvers.article.updateOne,
    updateOneExpandable: resolvers.expandable.updateOne,
    updateOneBrand: resolvers.brand.updateOne,
    updateOneTopAuthor: resolvers.topAuthor.updateOne,
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
    deleteOneClicksPosition: resolvers.clicksPosition.deleteOne,
    deleteOneAppearance: resolvers.appearance.deleteOne,
    deleteOneFilter: resolvers.filter.deleteOne,
    deleteOneExpandable: resolvers.expandable.deleteOne,
    deleteOneArticle: resolvers.article.deleteOne,
    deleteOneBrand: resolvers.brand.deleteOne,
    deleteOneTopAuthor: resolvers.topAuthor.deleteOne,
    deleteOneEditor: resolvers.editor.deleteOne,
  },
};

export default Resolvers;
