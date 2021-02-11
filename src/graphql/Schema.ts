import { gql } from 'apollo-server-express';

const Schema = gql`
  #
  # Schemas
  # Have no direct dependendencies with 'orm/schema.prisma' [SameName]
  #
  type User @cacheControl(maxAge: 1000) {
    id: Int!
    email: String!
    name: String!
    password: String!
    role: Int!
    lastLogin: String!
    created: String!
    updated: String!
    ### Only graphql types
    token: String
    refreshToken: String
  }
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
  ## User
  input RegistrationParams {
    name: String
    password: String!
    passwordRepeat: String!
    email: String!
  }
  input LoginParams {
    email: String!
    password: String!
  }
  input GetOneUserParams {
    id: Int!
  }
  input UpdateOneUserParams {
    name: String
    email: String
    role: Int
    password: String
  }
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
    getOneUser(where: GetOneUserParams!): User
    getOneBrand(where: GetOneBrandParams!): Brand
    getOneAuthor(where: GetOneAuthorParams!): Author
    getOneEditor(where: GetOneEditorParams!): Editor
  }
  type Mutation {
    # Special user mutations
    registration(data: RegistrationParams!): User
    login(data: LoginParams!): User
    # Post one
    postOneBrand(data: PostOneBrandParams!): Brand
    postOneAuthor(data: PostOneAuthorParams!): Author
    postOneEditor(data: PostOneEditorParams!): Editor
    # Update one
    updateOneUser(where: GetOneUserParams!, data: UpdateOneUserParams!): User
    updateOneBrand(where: GetOneBrandParams!, data: UpdateOneBrandParams!): Brand
    updateOneAuthor(where: GetOneAuthorParams!, data: UpdateOneAuthorParams!): Author
    updateOneEditor(where: GetOneEditorParams!, data: UpdateOneEditorParams!): Editor
    # Delete one
    deleteOneUser(where: GetOneUserParams!): User
    deleteOneBrand(where: GetOneBrandParams!): Brand
    deleteOneAuthor(where: GetOneAuthorParams!): Author
    deleteOneEditor(where: GetOneEditorParams!): Editor
  }
`;

export default Schema;
