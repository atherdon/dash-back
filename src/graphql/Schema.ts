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
  # All returned types must have in Response
  type Response {
    # Required fields on all response result
    status: String!
    message: String!
    httpCode: Int!
    # Optional fields
    # Standart error in development mode
    stdErrorMessage: String
    # Fields of custom objects
    brand: Brand
    brands: [Brand]
    author: Author
    authors: [Author]
    editor: Editor
    editors: [Editor]
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
    getManyBrand: Response!
    getManyAuthor: Response!
    getManyEditor: Response!
    # Get one
    getOneBrand(where: GetOneBrandParams!): Response!
    getOneAuthor(where: GetOneAuthorParams!): Response!
    getOneEditor(where: GetOneEditorParams!): Response!
  }
  type Mutation {
    # Post one
    postOneBrand(data: PostOneBrandParams!): Response!
    postOneAuthor(data: PostOneAuthorParams!): Response!
    postOneEditor(data: PostOneEditorParams!): Response!
    # Update one
    updateOneBrand(where: GetOneBrandParams!, data: UpdateOneBrandParams!): Response!
    updateOneAuthor(where: GetOneAuthorParams!, data: UpdateOneAuthorParams!): Response!
    updateOneEditor(where: GetOneEditorParams!, data: UpdateOneEditorParams!): Response!
    # Delete one
    deleteOneBrand(where: GetOneBrandParams!): Response!
    deleteOneAuthor(where: GetOneAuthorParams!): Response!
    deleteOneEditor(where: GetOneEditorParams!): Response!
  }
`;

export default Schema;
