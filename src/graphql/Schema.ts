import { gql } from 'apollo-server-express';

const Schema = gql`
  scalar GraphQLDateTime
  # Global types
  input PaginationParams {
    current: Int!
    limit: Int!
  }
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
    ready: Boolean!
    url: String!
    type: String!
    isPublished: Boolean!
    added: GraphQLDateTime!
    edited: GraphQLDateTime!
    published: GraphQLDateTime!
    avgTimeStory: Int
    avgAllTimeStory: Int
    created: GraphQLDateTime!
    updated: GraphQLDateTime!
    ### Relation types
    tags: [String]!
  }
  type ArticleMany @cacheControl(maxAge: 1000) {
    count: Int!
    items: [Article]
  }
  type ArticleTag @cacheControl(maxAge: 1000) {
    id: Int!
    tagId: Int!
    articleId: Int!
    Tag: Tag!
    Article: Article!
    created: GraphQLDateTime!
    updated: GraphQLDateTime!
  }
  type ArticleTagMany @cacheControl(maxAge: 1000) {
    count: Int!
    items: [ArticleTag]
  }
  type Filter @cacheControl(maxAge: 1000) {
    id: Int!
    filter: String!
    value: String!
    created: GraphQLDateTime!
    updated: GraphQLDateTime!
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
    created: GraphQLDateTime!
    updated: GraphQLDateTime!
  }
  type Expandable @cacheControl(maxAge: 1000) {
    id: Int!
    key: Int!
    name: String!
    parentCategory: String!
    articles: [String]!
    created: GraphQLDateTime!
    updated: GraphQLDateTime!
  }
  type Appearance @cacheControl(maxAge: 1000) {
    id: Int!
    search: String!
    clicks: Int!
    impressions: Int!
    ctr: String!
    position: Float!
    created: GraphQLDateTime!
    updated: GraphQLDateTime!
  }
  type ClicksPosition @cacheControl(maxAge: 1000) {
    id: Int!
    date: String!
    clicks: Int!
    impressions: Int!
    ctr: String!
    position: Float!
    created: GraphQLDateTime!
    updated: GraphQLDateTime!
  }
  type Country @cacheControl(maxAge: 1000) {
    id: Int!
    name: String!
    clicks: Int!
    impressions: Int!
    ctr: String!
    position: Float!
    created: GraphQLDateTime!
    updated: GraphQLDateTime!
  }
  type Device @cacheControl(maxAge: 1000) {
    id: Int!
    name: String!
    clicks: Int!
    impressions: Int!
    ctr: String!
    position: Float!
    created: GraphQLDateTime!
    updated: GraphQLDateTime!
  }
  type Page @cacheControl(maxAge: 1000) {
    id: Int!
    url: String!
    clicks: Int!
    impressions: Int!
    ctr: String!
    position: Float!
    created: GraphQLDateTime!
    updated: GraphQLDateTime!
  }
  type QueryS @cacheControl(maxAge: 1000) {
    id: Int!
    name: String!
    clicks: Int!
    impressions: Int!
    ctr: String!
    position: Float!
    created: GraphQLDateTime!
    updated: GraphQLDateTime!
  }
  type Tag @cacheControl(maxAge: 1000) {
    id: Int!
    word: String!
    count: Int!
    char: String!
    created: GraphQLDateTime!
    updated: GraphQLDateTime!
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
  input GetManyArticleParams {
    type: String!
    isPublished: Boolean
    pagination: PaginationParams
  }
  input PostOneArticleParams {
    ready: Boolean
    url: String!
    type: String!
    isPublished: Boolean
    added: GraphQLDateTime!
    edited: GraphQLDateTime
    published: GraphQLDateTime
    avgTimeStory: Int
    avgAllTimeStory: Int
  }
  input GetOneArticleParams {
    id: Int!
  }
  input UpdateOneArticleParams {
    ready: Boolean
    url: String
    type: String
    isPublished: Boolean
    added: GraphQLDateTime
    edited: GraphQLDateTime
    published: GraphQLDateTime
    avgTimeStory: Int
    avgAllTimeStory: Int
  }
  ## ArticleTag
  input PostOneArticleTagParams {
    tagId: Int!
    articleId: Int!
  }
  input GetOneArticleTagParams {
    id: Int!
  }
  input GetManyArticleTagParams {
    type: String!
    articleId: Int
    tagId: Int
    word: String
    pagination: PaginationParams
  }
  input UpdateOneArticleTagParams {
    tagId: Int
    articleId: Int
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
    parentCategory: String!
    articles: [String]!
  }
  input GetOneExpandableParams {
    id: Int!
  }
  input UpdateOneExpandableParams {
    key: Int
    name: String
    parentCategory: String
    articles: [String]
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
  ## Country
  input PostOneCountryParams {
    name: String!
    clicks: Int!
    impressions: Int!
    ctr: String!
    position: Float!
  }
  input GetOneCountryParams {
    id: Int!
  }
  input UpdateOneCountryParams {
    name: String
    clicks: Int
    impressions: Int
    ctr: String
    position: Float
  }
  ## Device
  input PostOneDeviceParams {
    name: String!
    clicks: Int!
    impressions: Int!
    ctr: String!
    position: Float!
  }
  input GetOneDeviceParams {
    id: Int!
  }
  input UpdateOneDeviceParams {
    name: String
    clicks: Int
    impressions: Int
    ctr: String
    position: Float
  }
  ## Page
  input PostOnePageParams {
    url: String!
    clicks: Int!
    impressions: Int!
    ctr: String!
    position: Float!
  }
  input GetOnePageParams {
    id: Int!
  }
  input UpdateOnePageParams {
    url: String
    clicks: Int
    impressions: Int
    ctr: String
    position: Float
  }
  ## QueryS
  input PostOneQuerySParams {
    name: String!
    clicks: Int!
    impressions: Int!
    ctr: String!
    position: Float!
  }
  input GetOneQuerySParams {
    id: Int!
  }
  input UpdateOneQuerySParams {
    name: String
    clicks: Int
    impressions: Int
    ctr: String
    position: Float
  }
  ## Tag
  input PostOneTagParams {
    word: String!
    count: Int!
    char: String!
  }
  input GetOneTagParams {
    id: Int!
  }
  input UpdateOneTagParams {
    word: String
    count: Int
    char: String
  }
  ### Query and Mutation
  type Query {
    # Get many
    getManyArticle(where: GetManyArticleParams!): ArticleMany!
    getManyArticleTag(where: GetManyArticleTagParams!): ArticleTagMany!
    getManyTag: [Tag]!
    getManyQueryS: [QueryS]!
    getManyPage: [Page]!
    getManyDevice: [Device]!
    getManyCountry: [Country]!
    getManyClicksPosition: [ClicksPosition]!
    getManyAppearance: [Appearance]!
    getManyFilter: [Filter]!
    getManyEditor: [Editor]!
    getManyExpandable: [Expandable]!
    # Get one
    getOneUser(where: GetOneUserParams!): User
    getOneTag(where: GetOneTagParams!): Tag
    getOneQueryS(where: GetOneQuerySParams!): QueryS
    getOnePage(where: GetOnePageParams!): Page
    getOneDevice(where: GetOneDeviceParams!): Device
    getOneCountry(where: GetOneCountryParams!): Country
    getOneClicksPosition(where: GetOneClicksPositionParams!): ClicksPosition
    getOneAppearance(where: GetOneAppearanceParams!): Appearance
    getOneArticle(where: GetOneArticleParams!): Article
    getOneArticleTag(where: GetOneArticleTagParams!): ArticleTag
    getOneFilter(where: GetOneFilterParams!): Filter
    getOneExpandable(where: GetOneExpandableParams!): Expandable
    getOneEditor(where: GetOneEditorParams!): Editor
  }
  type Mutation {
    # Special user mutations
    registration(data: RegistrationParams!): User
    login(data: LoginParams!): User
    # Post one
    postOneExpandable(data: PostOneExpandableParams!): Expandable
    postOneTag(data: PostOneTagParams!): Tag
    postOneQueryS(data: PostOneQuerySParams!): QueryS
    postOnePage(data: PostOnePageParams!): Page
    postOneDevice(data: PostOneDeviceParams!): Device
    postOneCountry(data: PostOneCountryParams!): Country
    postOneClicksPosition(data: PostOneClicksPositionParams!): ClicksPosition
    postOneAppearance(data: PostOneAppearanceParams!): Appearance
    postOneFilter(data: PostOneFilterParams!): Filter
    postOneArticle(data: PostOneArticleParams!): Article
    postOneArticleTag(data: PostOneArticleTagParams!): ArticleTag
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
    updateOneExpandable(
      where: GetOneExpandableParams!
      data: UpdateOneExpandableParams!
    ): Expandable
    updateOneEditor(where: GetOneEditorParams!, data: UpdateOneEditorParams!): Editor
    updateOneCountry(where: GetOneCountryParams!, data: UpdateOneCountryParams!): Country
    updateOneDevice(where: GetOneDeviceParams!, data: UpdateOneDeviceParams!): Device
    updateOnePage(where: GetOnePageParams!, data: UpdateOnePageParams!): Page
    updateOneQueryS(where: GetOneQuerySParams!, data: UpdateOneQuerySParams!): QueryS
    updateOneTag(where: GetOneTagParams!, data: UpdateOneTagParams!): Tag
    updateOneArticleTag(
      where: GetOneArticleTagParams!
      data: UpdateOneArticleTagParams!
    ): ArticleTag
    # Delete one
    deleteOneUser(where: GetOneUserParams!): User
    deleteOneTag(where: GetOneTagParams!): Tag
    deleteOneQueryS(where: GetOneQuerySParams!): QueryS
    deleteOnePage(where: GetOnePageParams!): Page
    deleteOneDevice(where: GetOneDeviceParams!): Device
    deleteOneCountry(where: GetOneCountryParams!): Country
    deleteOneClicksPosition(where: GetOneClicksPositionParams!): ClicksPosition
    deleteOneAppearance(where: GetOneAppearanceParams!): Appearance
    deleteOneFilter(where: GetOneFilterParams!): Filter
    deleteOneArticle(where: GetOneArticleParams!): Article
    deleteOneArticleTag(where: GetOneArticleTagParams!): ArticleTag
    deleteOneExpandable(where: GetOneExpandableParams!): Expandable
    deleteOneEditor(where: GetOneEditorParams!): Editor
  }
`;

export default Schema;
