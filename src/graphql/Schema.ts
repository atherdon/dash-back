import { gql } from 'apollo-server-express';

const Schema = gql`
  #
  # Schemas
  # Have no direct dependendencies with 'orm/schema.prisma' [SameName]
  #
  type Brand @cacheControl(maxAge: 1000) {
    id: Int!
    url: String!
    email: String!
    created: String!
    updated: String!
    avgTimeStory: Float!
    avgAllTimeStory: Float!
  }
  type Author @cacheControl(maxAge: 1000) {
    id: Int!
    url: String!
    email: String!
    isPublished: Boolean!
    created: String!
    edited: String!
    updated: String!
    published: String!
    avgTimeStory: Float!
    avgAllTimeStory: Float!
  }
  type Editor @cacheControl(maxAge: 1000) {
    id: Int!
    name: String!
    edited: Int!
    editedPercent: Float!
    published: Int!
    publishedPercent: Float!
    rejected: Int!
    rejectedPercent: Float!
    created: String!
    updated: String!
  }
  # Inputs as requests parameters
  ## Brand
  input PostOneBrandParams {
    url: String!
    email: String!
  }
  input GetOneBrandParams {
    id: Int!
  }
  input UpdateOneBrandParams {
    url: String
    email: String
    avgTimeStory: Float
    avgAllTimeStory: Float
  }
  ## Author
  input PostOneAuthorParams {
    url: String!
    email: String!
  }
  input GetOneAuthorParams {
    id: Int!
  }
  input UpdateOneAuthorParams {
    url: String
    email: String
    isPublished: Boolean
    edited: String
    published: String
    avgTimeStory: Float
    avgAllTimeStory: Float
  }
  ## Editor
  input PostOneEditorParams {
    name: String!
  }
  input GetOneEditorParams {
    id: Int!
  }
  input UpdateOneEditorParams {
    name: String
    edited: Int
    editedPercent: Float
    published: Int
    publishedPercent: Float
    rejected: Int
    rejectedPercent: Float
  }
  type Query {
    # Get many
    getManyBrand: [Brand]!
    getManyAuthor: [Author]!
    getManyEditor: [Editor]!
    # Get one
    getOneBrand(where: GetOneBrandParams!): Brand
    getOneAuthor(where: GetOneAuthorParams!): Author
    getOneEditor(where: GetOneEditorParams!): Editor
  }
  type Mutation {
    # Post one
    postOneBrand(data: PostOneBrandParams!): Brand
    postOneAuthor(data: PostOneAuthorParams!): Author
    postOneEditor(data: PostOneEditorParams!): Editor
    # Update one
    updateOneBrand(where: GetOneBrandParams!, data: UpdateOneBrandParams!): Brand
    updateOneAuthor(where: GetOneAuthorParams!, data: UpdateOneAuthorParams!): Author
    updateOneEditor(where: GetOneEditorParams!, data: UpdateOneEditorParams!): Editor
    # Delete one
    deleteOneBrand(where: GetOneBrandParams!): Brand
    deleteOneAuthor(where: GetOneAuthorParams!): Author
    deleteOneEditor(where: GetOneEditorParams!): Editor
  }
`;

export default Schema;
