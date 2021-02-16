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
    roleName: String!
    token: String
    refreshToken: String
  }
  type Article @cacheControl(maxAge: 1000) {
    id: Int!
    v: String!
    url: String!
    email: String!
    isPublished: String!
    added: String!
    edited: String!
    published: String!
    avgTimeStory: String!
    avgAllTimeStory: String!
    created: String!
    updated: String!
  }
  type Filter @cacheControl(maxAge: 1000) {
    id: Int!
    filter: String!
    value: String!
    created: String!
    updated: String!
  }
  type Brand @cacheControl(maxAge: 1000) {
    id: Int!
    v: String!
    url: String!
    email: String!
    isPublished: String!
    added: String!
    edited: String!
    published: String!
    avgTimeStory: String!
    avgAllTimeStory: String!
    created: String!
    updated: String!
  }
  type TopAuthor @cacheControl(maxAge: 1000) {
    id: Int!
    v: String!
    url: String!
    email: String!
    isPublished: String!
    added: String!
    edited: String!
    published: String!
    avgTimeStory: String!
    avgAllTimeStory: String!
    created: String!
    updated: String!
  }
  type Editor @cacheControl(maxAge: 1000) {
    id: Int!
    name: String!
    edited: String!
    editedPercent: String!
    published: String!
    publishedPercent: String!
    rejected: String!
    rejectedPercent: String!
    created: String!
    updated: String!
  }
  type Expandable @cacheControl(maxAge: 1000) {
    id: Int!
    key: Int!
    name: String!
    age: Int!
    address: String!
    description: String!
    created: String!
    updated: String!
  }
  type Appearance @cacheControl(maxAge: 1000) {
    id: Int!
    search: String!
    clicks: Int!
    impressions: Int!
    ctr: String!
    position: Float!
    created: String!
    updated: String!
  }
  type ClicksPosition @cacheControl(maxAge: 1000) {
    id: Int!
    date: String!
    clicks: Int!
    impressions: Int!
    ctr: String!
    position: Float!
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
  ## Article
  input PostOneArticleParams {
    v: String!
    url: String!
    email: String!
    isPublished: String!
    added: String!
    edited: String!
    published: String!
    avgTimeStory: String!
    avgAllTimeStory: String!
  }
  input GetOneArticleParams {
    id: Int!
  }
  input UpdateOneArticleParams {
    v: String
    url: String
    email: String
    isPublished: String
    added: String
    edited: String
    published: String
    avgTimeStory: String
    avgAllTimeStory: String
  }
  ## Brand
  input PostOneBrandParams {
    v: String!
    url: String!
    email: String!
    isPublished: String!
    added: String!
    edited: String!
    published: String!
    avgTimeStory: String!
    avgAllTimeStory: String!
  }
  input GetOneBrandParams {
    id: Int!
  }
  input UpdateOneBrandParams {
    v: String
    url: String
    email: String
    isPublished: String
    added: String
    edited: String
    published: String
    avgTimeStory: String
    avgAllTimeStory: String
  }
  ## TopAuthor
  input PostOneTopAuthorParams {
    v: String!
    url: String!
    email: String!
    isPublished: String!
    added: String!
    edited: String!
    published: String!
    avgTimeStory: String!
    avgAllTimeStory: String!
  }
  input GetOneTopAuthorParams {
    id: Int!
  }
  input UpdateOneTopAuthorParams {
    v: String
    url: String
    email: String
    isPublished: String
    added: String
    edited: String
    published: String
    avgTimeStory: String
    avgAllTimeStory: String
  }
  ## Editor
  input PostOneEditorParams {
    name: String!
    edited: String!
    editedPercent: String!
    published: String!
    publishedPercent: String!
    rejected: String!
    rejectedPercent: String!
  }
  input GetOneEditorParams {
    id: Int!
  }
  input UpdateOneEditorParams {
    name: String
    edited: String
    editedPercent: String
    published: String
    publishedPercent: String
    rejected: String
    rejectedPercent: String
  }
  ## Expandable
  input PostOneExpandableParams {
    key: Int!
    name: String!
    age: Int!
    address: String!
    description: String!
  }
  input GetOneExpandableParams {
    id: Int!
  }
  input UpdateOneExpandableParams {
    key: Int
    name: String
    age: Int
    address: String
    description: String
  }
  ## Filter
  input PostOneFilterParams {
    filter: String!
    value: String!
  }
  input GetOneFilterParams {
    id: Int!
  }
  input UpdateOneFilterParams {
    filter: String
    value: String
  }
  ## Appearance
  input PostOneAppearanceParams {
    search: String!
    clicks: Int!
    impressions: Int!
    ctr: String!
    position: Float!
  }
  input GetOneAppearanceParams {
    id: Int!
  }
  input UpdateOneAppearanceParams {
    search: String
    clicks: Int
    impressions: Int
    ctr: String
    position: Float
  }
  ## ClicksPosition
  input PostOneClicksPositionParams {
    date: String!
    clicks: Int!
    impressions: Int!
    ctr: String!
    position: Float!
  }
  input GetOneClicksPositionParams {
    id: Int!
  }
  input UpdateOneClicksPositionParams {
    date: String
    clicks: Int
    impressions: Int
    ctr: String
    position: Float
  }
  type Query {
    # Get many
    getManyArticle: [Article]!
    getManyClicksPosition: [ClicksPosition]!
    getManyAppearance: [Appearance]!
    getManyFilter: [Filter]!
    getManyBrand: [Brand]!
    getManyTopAuthor: [TopAuthor]!
    getManyEditor: [Editor]!
    getManyExpandable: [Expandable]!
    # Get one
    getOneUser(where: GetOneUserParams!): User
    getOneClicksPosition(where: GetOneClicksPositionParams!): ClicksPosition
    getOneAppearance(where: GetOneAppearanceParams!): Appearance
    getOneArticle(where: GetOneArticleParams!): Article
    getOneFilter(where: GetOneFilterParams!): Filter
    getOneExpandable(where: GetOneExpandableParams!): Expandable
    getOneBrand(where: GetOneBrandParams!): Brand
    getOneTopAuthor(where: GetOneTopAuthorParams!): TopAuthor
    getOneEditor(where: GetOneEditorParams!): Editor
  }
  type Mutation {
    # Special user mutations
    registration(data: RegistrationParams!): User
    login(data: LoginParams!): User
    # Post one
    postOneExpandable(data: PostOneExpandableParams!): Expandable
    postOneBrand(data: PostOneBrandParams!): Brand
    postOneClicksPosition(data: PostOneClicksPositionParams!): ClicksPosition
    postOneAppearance(data: PostOneAppearanceParams!): Appearance
    postOneFilter(data: PostOneFilterParams!): Filter
    postOneArticle(data: PostOneArticleParams!): Article
    postOneTopAuthor(data: PostOneTopAuthorParams!): TopAuthor
    postOneEditor(data: PostOneEditorParams!): Editor
    # Update one
    updateOneUser(where: GetOneUserParams!, data: UpdateOneUserParams!): User
    updateOneAppearance(
      where: GetOneAppearanceParams!
      data: UpdateOneAppearanceParams!
    ): Appearance
    updateOneFilter(where: GetOneFilterParams!, data: UpdateOneFilterParams!): Filter
    updateOneClicksPosition(
      where: GetOneClicksPositionParams!
      data: UpdateOneClicksPositionParams!
    ): ClicksPosition
    updateOneArticle(where: GetOneArticleParams!, data: UpdateOneArticleParams!): Article
    updateOneBrand(where: GetOneBrandParams!, data: UpdateOneBrandParams!): Brand
    updateOneExpandable(
      where: GetOneExpandableParams!
      data: UpdateOneExpandableParams!
    ): Expandable
    updateOneTopAuthor(where: GetOneTopAuthorParams!, data: UpdateOneTopAuthorParams!): TopAuthor
    updateOneEditor(where: GetOneEditorParams!, data: UpdateOneEditorParams!): Editor
    # Delete one
    deleteOneUser(where: GetOneUserParams!): User
    deleteOneClicksPosition(where: GetOneClicksPositionParams!): ClicksPosition
    deleteOneAppearance(where: GetOneAppearanceParams!): Appearance
    deleteOneFilter(where: GetOneFilterParams!): Filter
    deleteOneArticle(where: GetOneArticleParams!): Article
    deleteOneExpandable(where: GetOneExpandableParams!): Expandable
    deleteOneBrand(where: GetOneBrandParams!): Brand
    deleteOneTopAuthor(where: GetOneTopAuthorParams!): TopAuthor
    deleteOneEditor(where: GetOneEditorParams!): Editor
  }
`;

export default Schema;
