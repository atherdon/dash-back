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
    getManyTag: resolvers.tag.getMany,
    getManyArticleTag: resolvers.articleTag.getMany,
    getManyQueryS: resolvers.queryS.getMany,
    getManyPage: resolvers.page.getMany,
    getManyDevice: resolvers.device.getMany,
    getManyCountry: resolvers.country.getMany,
    getManyClicksPosition: resolvers.clicksPosition.getMany,
    getManyAppearance: resolvers.appearance.getMany,
    getManyExpandable: resolvers.expandable.getMany,
    getManyArticle: resolvers.article.getMany,
    getManyEditor: resolvers.editor.getMany,
    getManyFilter: resolvers.filter.getMany,
    // Get one
    getOneFilter: resolvers.filter.getOne,
    getOneArticleTag: resolvers.articleTag.getOne,
    getOneTag: resolvers.tag.getOne,
    getOneQueryS: resolvers.queryS.getOne,
    getOnePage: resolvers.page.getOne,
    getOneDevice: resolvers.device.getOne,
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
    getOneCountry: resolvers.country.getOne,
    getOneEditor: resolvers.editor.getOne,
  },
  Mutation: {
    // User mutations
    registration: resolvers.user.registration,
    login: resolvers.user.login,
    // Post one
    postOneArticle: resolvers.article.postOne,
    postOneArticleTag: resolvers.articleTag.postOne,
    postOneTag: resolvers.tag.postOne,
    postOneQueryS: resolvers.queryS.postOne,
    postOnePage: resolvers.page.postOne,
    postOneDevice: resolvers.device.postOne,
    postOneCountry: resolvers.country.postOne,
    postOneClicksPosition: resolvers.clicksPosition.postOne,
    postOneAppearance: resolvers.appearance.postOne,
    postOneFilter: resolvers.filter.postOne,
    postOneExpandable: resolvers.expandable.postOne,
    postOneEditor: resolvers.editor.postOne,
    // Update one
    updateOneFilter: resolvers.filter.updateOne,
    updateOneTag: resolvers.tag.updateOne,
    updateOneArticleTag: resolvers.articleTag.updateOne,
    updateOneQueryS: resolvers.queryS.updateOne,
    updateOnePage: resolvers.page.updateOne,
    updateOneDevice: resolvers.device.updateOne,
    updateOneCountry: resolvers.country.updateOne,
    updateOneClicksPosition: resolvers.clicksPosition.updateOne,
    updateOneAppearance: resolvers.appearance.updateOne,
    updateOneArticle: resolvers.article.updateOne,
    updateOneExpandable: resolvers.expandable.updateOne,
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
    deleteOnePage: resolvers.page.deleteOne,
    deleteOneArticleTag: resolvers.articleTag.deleteOne,
    deleteOneTag: resolvers.tag.deleteOne,
    deleteOneQueryS: resolvers.queryS.deleteOne,
    deleteOneCountry: resolvers.country.deleteOne,
    deleteOneDevice: resolvers.device.deleteOne,
    deleteOneClicksPosition: resolvers.clicksPosition.deleteOne,
    deleteOneAppearance: resolvers.appearance.deleteOne,
    deleteOneFilter: resolvers.filter.deleteOne,
    deleteOneExpandable: resolvers.expandable.deleteOne,
    deleteOneArticle: resolvers.article.deleteOne,
    deleteOneEditor: resolvers.editor.deleteOne,
  },
};

export default Resolvers;
