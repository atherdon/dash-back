import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};


export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  role: Scalars['Int'];
  lastLogin: Scalars['String'];
  created: Scalars['String'];
  updated: Scalars['String'];
  roleName: Scalars['String'];
  token?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
};

export type Article = {
  __typename?: 'Article';
  id: Scalars['Int'];
  v: Scalars['String'];
  url: Scalars['String'];
  email: Scalars['String'];
  type: Scalars['String'];
  isPublished: Scalars['Boolean'];
  added: Scalars['String'];
  edited: Scalars['String'];
  published: Scalars['String'];
  avgTimeStory?: Maybe<Scalars['Int']>;
  avgAllTimeStory?: Maybe<Scalars['Int']>;
  created: Scalars['String'];
  updated: Scalars['String'];
};

export type ArticleMany = {
  __typename?: 'ArticleMany';
  count: Scalars['Int'];
  items?: Maybe<Array<Maybe<Article>>>;
};

export type Filter = {
  __typename?: 'Filter';
  id: Scalars['Int'];
  filter: Scalars['String'];
  value: Scalars['String'];
  created: Scalars['String'];
  updated: Scalars['String'];
};

export type Editor = {
  __typename?: 'Editor';
  id: Scalars['Int'];
  name: Scalars['String'];
  edited: Scalars['String'];
  editedPercent: Scalars['String'];
  published: Scalars['String'];
  publishedPercent: Scalars['String'];
  rejected: Scalars['String'];
  rejectedPercent: Scalars['String'];
  created: Scalars['String'];
  updated: Scalars['String'];
};

export type Expandable = {
  __typename?: 'Expandable';
  id: Scalars['Int'];
  key: Scalars['Int'];
  name: Scalars['String'];
  address: Scalars['String'];
  articles: Array<Maybe<Scalars['String']>>;
  created: Scalars['String'];
  updated: Scalars['String'];
};

export type Appearance = {
  __typename?: 'Appearance';
  id: Scalars['Int'];
  search: Scalars['String'];
  clicks: Scalars['Int'];
  impressions: Scalars['Int'];
  ctr: Scalars['String'];
  position: Scalars['Float'];
  created: Scalars['String'];
  updated: Scalars['String'];
};

export type ClicksPosition = {
  __typename?: 'ClicksPosition';
  id: Scalars['Int'];
  date: Scalars['String'];
  clicks: Scalars['Int'];
  impressions: Scalars['Int'];
  ctr: Scalars['String'];
  position: Scalars['Float'];
  created: Scalars['String'];
  updated: Scalars['String'];
};

export type Country = {
  __typename?: 'Country';
  id: Scalars['Int'];
  name: Scalars['String'];
  clicks: Scalars['Int'];
  impressions: Scalars['Int'];
  ctr: Scalars['String'];
  position: Scalars['Float'];
  created: Scalars['String'];
  updated: Scalars['String'];
};

export type Device = {
  __typename?: 'Device';
  id: Scalars['Int'];
  name: Scalars['String'];
  clicks: Scalars['Int'];
  impressions: Scalars['Int'];
  ctr: Scalars['String'];
  position: Scalars['Float'];
  created: Scalars['String'];
  updated: Scalars['String'];
};

export type Page = {
  __typename?: 'Page';
  id: Scalars['Int'];
  url: Scalars['String'];
  clicks: Scalars['Int'];
  impressions: Scalars['Int'];
  ctr: Scalars['String'];
  position: Scalars['Float'];
  created: Scalars['String'];
  updated: Scalars['String'];
};

export type QueryS = {
  __typename?: 'QueryS';
  id: Scalars['Int'];
  name: Scalars['String'];
  clicks: Scalars['Int'];
  impressions: Scalars['Int'];
  ctr: Scalars['String'];
  position: Scalars['Float'];
  created: Scalars['String'];
  updated: Scalars['String'];
};

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['Int'];
  word: Scalars['String'];
  count: Scalars['Int'];
  char: Scalars['String'];
  created: Scalars['String'];
  updated: Scalars['String'];
};

export type RegistrationParams = {
  name?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  passwordRepeat: Scalars['String'];
  email: Scalars['String'];
};

export type LoginParams = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type GetOneUserParams = {
  id: Scalars['Int'];
};

export type UpdateOneUserParams = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['Int']>;
  password?: Maybe<Scalars['String']>;
};

export type ArticlePaginationParams = {
  current: Scalars['Int'];
  limit: Scalars['Int'];
};

export type GetManyArticleParams = {
  type: Scalars['String'];
  isPublished?: Maybe<Scalars['Boolean']>;
  pagination?: Maybe<ArticlePaginationParams>;
};

export type PostOneArticleParams = {
  v: Scalars['String'];
  url: Scalars['String'];
  email: Scalars['String'];
  type: Scalars['String'];
  isPublished: Scalars['Boolean'];
  added: Scalars['String'];
  edited: Scalars['String'];
  published: Scalars['String'];
  avgTimeStory?: Maybe<Scalars['Int']>;
  avgAllTimeStory?: Maybe<Scalars['Int']>;
};

export type GetOneArticleParams = {
  id: Scalars['Int'];
};

export type UpdateOneArticleParams = {
  v?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  isPublished?: Maybe<Scalars['Boolean']>;
  added?: Maybe<Scalars['String']>;
  edited?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['String']>;
  avgTimeStory?: Maybe<Scalars['Int']>;
  avgAllTimeStory?: Maybe<Scalars['Int']>;
};

export type PostOneEditorParams = {
  name: Scalars['String'];
  edited: Scalars['String'];
  editedPercent: Scalars['String'];
  published: Scalars['String'];
  publishedPercent: Scalars['String'];
  rejected: Scalars['String'];
  rejectedPercent: Scalars['String'];
};

export type GetOneEditorParams = {
  id: Scalars['Int'];
};

export type UpdateOneEditorParams = {
  name?: Maybe<Scalars['String']>;
  edited?: Maybe<Scalars['String']>;
  editedPercent?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['String']>;
  publishedPercent?: Maybe<Scalars['String']>;
  rejected?: Maybe<Scalars['String']>;
  rejectedPercent?: Maybe<Scalars['String']>;
};

export type PostOneExpandableParams = {
  key: Scalars['Int'];
  name: Scalars['String'];
  address: Scalars['String'];
  articles: Array<Maybe<Scalars['String']>>;
};

export type GetOneExpandableParams = {
  id: Scalars['Int'];
};

export type UpdateOneExpandableParams = {
  key?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  articles?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type PostOneFilterParams = {
  filter: Scalars['String'];
  value: Scalars['String'];
};

export type GetOneFilterParams = {
  id: Scalars['Int'];
};

export type UpdateOneFilterParams = {
  filter?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type PostOneAppearanceParams = {
  search: Scalars['String'];
  clicks: Scalars['Int'];
  impressions: Scalars['Int'];
  ctr: Scalars['String'];
  position: Scalars['Float'];
};

export type GetOneAppearanceParams = {
  id: Scalars['Int'];
};

export type UpdateOneAppearanceParams = {
  search?: Maybe<Scalars['String']>;
  clicks?: Maybe<Scalars['Int']>;
  impressions?: Maybe<Scalars['Int']>;
  ctr?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Float']>;
};

export type PostOneClicksPositionParams = {
  date: Scalars['String'];
  clicks: Scalars['Int'];
  impressions: Scalars['Int'];
  ctr: Scalars['String'];
  position: Scalars['Float'];
};

export type GetOneClicksPositionParams = {
  id: Scalars['Int'];
};

export type UpdateOneClicksPositionParams = {
  date?: Maybe<Scalars['String']>;
  clicks?: Maybe<Scalars['Int']>;
  impressions?: Maybe<Scalars['Int']>;
  ctr?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Float']>;
};

export type PostOneCountryParams = {
  name: Scalars['String'];
  clicks: Scalars['Int'];
  impressions: Scalars['Int'];
  ctr: Scalars['String'];
  position: Scalars['Float'];
};

export type GetOneCountryParams = {
  id: Scalars['Int'];
};

export type UpdateOneCountryParams = {
  name?: Maybe<Scalars['String']>;
  clicks?: Maybe<Scalars['Int']>;
  impressions?: Maybe<Scalars['Int']>;
  ctr?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Float']>;
};

export type PostOneDeviceParams = {
  name: Scalars['String'];
  clicks: Scalars['Int'];
  impressions: Scalars['Int'];
  ctr: Scalars['String'];
  position: Scalars['Float'];
};

export type GetOneDeviceParams = {
  id: Scalars['Int'];
};

export type UpdateOneDeviceParams = {
  name?: Maybe<Scalars['String']>;
  clicks?: Maybe<Scalars['Int']>;
  impressions?: Maybe<Scalars['Int']>;
  ctr?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Float']>;
};

export type PostOnePageParams = {
  url: Scalars['String'];
  clicks: Scalars['Int'];
  impressions: Scalars['Int'];
  ctr: Scalars['String'];
  position: Scalars['Float'];
};

export type GetOnePageParams = {
  id: Scalars['Int'];
};

export type UpdateOnePageParams = {
  url?: Maybe<Scalars['String']>;
  clicks?: Maybe<Scalars['Int']>;
  impressions?: Maybe<Scalars['Int']>;
  ctr?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Float']>;
};

export type PostOneQuerySParams = {
  name: Scalars['String'];
  clicks: Scalars['Int'];
  impressions: Scalars['Int'];
  ctr: Scalars['String'];
  position: Scalars['Float'];
};

export type GetOneQuerySParams = {
  id: Scalars['Int'];
};

export type UpdateOneQuerySParams = {
  name?: Maybe<Scalars['String']>;
  clicks?: Maybe<Scalars['Int']>;
  impressions?: Maybe<Scalars['Int']>;
  ctr?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Float']>;
};

export type PostOneTagParams = {
  word: Scalars['String'];
  count: Scalars['Int'];
  char: Scalars['String'];
};

export type GetOneTagParams = {
  id: Scalars['Int'];
};

export type UpdateOneTagParams = {
  word?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  char?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  getManyArticle: ArticleMany;
  getManyTag: Array<Maybe<Tag>>;
  getManyQueryS: Array<Maybe<QueryS>>;
  getManyPage: Array<Maybe<Page>>;
  getManyDevice: Array<Maybe<Device>>;
  getManyCountry: Array<Maybe<Country>>;
  getManyClicksPosition: Array<Maybe<ClicksPosition>>;
  getManyAppearance: Array<Maybe<Appearance>>;
  getManyFilter: Array<Maybe<Filter>>;
  getManyEditor: Array<Maybe<Editor>>;
  getManyExpandable: Array<Maybe<Expandable>>;
  getOneUser?: Maybe<User>;
  getOneTag?: Maybe<Tag>;
  getOneQueryS?: Maybe<QueryS>;
  getOnePage?: Maybe<Page>;
  getOneDevice?: Maybe<Device>;
  getOneCountry?: Maybe<Country>;
  getOneClicksPosition?: Maybe<ClicksPosition>;
  getOneAppearance?: Maybe<Appearance>;
  getOneArticle?: Maybe<Article>;
  getOneFilter?: Maybe<Filter>;
  getOneExpandable?: Maybe<Expandable>;
  getOneEditor?: Maybe<Editor>;
};


export type QueryGetManyArticleArgs = {
  where: GetManyArticleParams;
};


export type QueryGetOneUserArgs = {
  where: GetOneUserParams;
};


export type QueryGetOneTagArgs = {
  where: GetOneTagParams;
};


export type QueryGetOneQuerySArgs = {
  where: GetOneQuerySParams;
};


export type QueryGetOnePageArgs = {
  where: GetOnePageParams;
};


export type QueryGetOneDeviceArgs = {
  where: GetOneDeviceParams;
};


export type QueryGetOneCountryArgs = {
  where: GetOneCountryParams;
};


export type QueryGetOneClicksPositionArgs = {
  where: GetOneClicksPositionParams;
};


export type QueryGetOneAppearanceArgs = {
  where: GetOneAppearanceParams;
};


export type QueryGetOneArticleArgs = {
  where: GetOneArticleParams;
};


export type QueryGetOneFilterArgs = {
  where: GetOneFilterParams;
};


export type QueryGetOneExpandableArgs = {
  where: GetOneExpandableParams;
};


export type QueryGetOneEditorArgs = {
  where: GetOneEditorParams;
};

export type Mutation = {
  __typename?: 'Mutation';
  registration?: Maybe<User>;
  login?: Maybe<User>;
  postOneExpandable?: Maybe<Expandable>;
  postOneTag?: Maybe<Tag>;
  postOneQueryS?: Maybe<QueryS>;
  postOnePage?: Maybe<Page>;
  postOneDevice?: Maybe<Device>;
  postOneCountry?: Maybe<Country>;
  postOneClicksPosition?: Maybe<ClicksPosition>;
  postOneAppearance?: Maybe<Appearance>;
  postOneFilter?: Maybe<Filter>;
  postOneArticle?: Maybe<Article>;
  postOneEditor?: Maybe<Editor>;
  updateOneUser?: Maybe<User>;
  updateOneAppearance?: Maybe<Appearance>;
  updateOneFilter?: Maybe<Filter>;
  updateOneClicksPosition?: Maybe<ClicksPosition>;
  updateOneArticle?: Maybe<Article>;
  updateOneExpandable?: Maybe<Expandable>;
  updateOneEditor?: Maybe<Editor>;
  updateOneCountry?: Maybe<Country>;
  updateOneDevice?: Maybe<Device>;
  updateOnePage?: Maybe<Page>;
  updateOneQueryS?: Maybe<QueryS>;
  updateOneTag?: Maybe<Tag>;
  deleteOneUser?: Maybe<User>;
  deleteOneTag?: Maybe<Tag>;
  deleteOneQueryS?: Maybe<QueryS>;
  deleteOnePage?: Maybe<Page>;
  deleteOneDevice?: Maybe<Device>;
  deleteOneCountry?: Maybe<Country>;
  deleteOneClicksPosition?: Maybe<ClicksPosition>;
  deleteOneAppearance?: Maybe<Appearance>;
  deleteOneFilter?: Maybe<Filter>;
  deleteOneArticle?: Maybe<Article>;
  deleteOneExpandable?: Maybe<Expandable>;
  deleteOneEditor?: Maybe<Editor>;
};


export type MutationRegistrationArgs = {
  data: RegistrationParams;
};


export type MutationLoginArgs = {
  data: LoginParams;
};


export type MutationPostOneExpandableArgs = {
  data: PostOneExpandableParams;
};


export type MutationPostOneTagArgs = {
  data: PostOneTagParams;
};


export type MutationPostOneQuerySArgs = {
  data: PostOneQuerySParams;
};


export type MutationPostOnePageArgs = {
  data: PostOnePageParams;
};


export type MutationPostOneDeviceArgs = {
  data: PostOneDeviceParams;
};


export type MutationPostOneCountryArgs = {
  data: PostOneCountryParams;
};


export type MutationPostOneClicksPositionArgs = {
  data: PostOneClicksPositionParams;
};


export type MutationPostOneAppearanceArgs = {
  data: PostOneAppearanceParams;
};


export type MutationPostOneFilterArgs = {
  data: PostOneFilterParams;
};


export type MutationPostOneArticleArgs = {
  data: PostOneArticleParams;
};


export type MutationPostOneEditorArgs = {
  data: PostOneEditorParams;
};


export type MutationUpdateOneUserArgs = {
  where: GetOneUserParams;
  data: UpdateOneUserParams;
};


export type MutationUpdateOneAppearanceArgs = {
  where: GetOneAppearanceParams;
  data: UpdateOneAppearanceParams;
};


export type MutationUpdateOneFilterArgs = {
  where: GetOneFilterParams;
  data: UpdateOneFilterParams;
};


export type MutationUpdateOneClicksPositionArgs = {
  where: GetOneClicksPositionParams;
  data: UpdateOneClicksPositionParams;
};


export type MutationUpdateOneArticleArgs = {
  where: GetOneArticleParams;
  data: UpdateOneArticleParams;
};


export type MutationUpdateOneExpandableArgs = {
  where: GetOneExpandableParams;
  data: UpdateOneExpandableParams;
};


export type MutationUpdateOneEditorArgs = {
  where: GetOneEditorParams;
  data: UpdateOneEditorParams;
};


export type MutationUpdateOneCountryArgs = {
  where: GetOneCountryParams;
  data: UpdateOneCountryParams;
};


export type MutationUpdateOneDeviceArgs = {
  where: GetOneDeviceParams;
  data: UpdateOneDeviceParams;
};


export type MutationUpdateOnePageArgs = {
  where: GetOnePageParams;
  data: UpdateOnePageParams;
};


export type MutationUpdateOneQuerySArgs = {
  where: GetOneQuerySParams;
  data: UpdateOneQuerySParams;
};


export type MutationUpdateOneTagArgs = {
  where: GetOneTagParams;
  data: UpdateOneTagParams;
};


export type MutationDeleteOneUserArgs = {
  where: GetOneUserParams;
};


export type MutationDeleteOneTagArgs = {
  where: GetOneTagParams;
};


export type MutationDeleteOneQuerySArgs = {
  where: GetOneQuerySParams;
};


export type MutationDeleteOnePageArgs = {
  where: GetOnePageParams;
};


export type MutationDeleteOneDeviceArgs = {
  where: GetOneDeviceParams;
};


export type MutationDeleteOneCountryArgs = {
  where: GetOneCountryParams;
};


export type MutationDeleteOneClicksPositionArgs = {
  where: GetOneClicksPositionParams;
};


export type MutationDeleteOneAppearanceArgs = {
  where: GetOneAppearanceParams;
};


export type MutationDeleteOneFilterArgs = {
  where: GetOneFilterParams;
};


export type MutationDeleteOneArticleArgs = {
  where: GetOneArticleParams;
};


export type MutationDeleteOneExpandableArgs = {
  where: GetOneExpandableParams;
};


export type MutationDeleteOneEditorArgs = {
  where: GetOneEditorParams;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}




export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  User: ResolverTypeWrapper<User>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Article: ResolverTypeWrapper<Article>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  ArticleMany: ResolverTypeWrapper<ArticleMany>;
  Filter: ResolverTypeWrapper<Filter>;
  Editor: ResolverTypeWrapper<Editor>;
  Expandable: ResolverTypeWrapper<Expandable>;
  Appearance: ResolverTypeWrapper<Appearance>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ClicksPosition: ResolverTypeWrapper<ClicksPosition>;
  Country: ResolverTypeWrapper<Country>;
  Device: ResolverTypeWrapper<Device>;
  Page: ResolverTypeWrapper<Page>;
  QueryS: ResolverTypeWrapper<QueryS>;
  Tag: ResolverTypeWrapper<Tag>;
  RegistrationParams: RegistrationParams;
  LoginParams: LoginParams;
  GetOneUserParams: GetOneUserParams;
  UpdateOneUserParams: UpdateOneUserParams;
  ArticlePaginationParams: ArticlePaginationParams;
  GetManyArticleParams: GetManyArticleParams;
  PostOneArticleParams: PostOneArticleParams;
  GetOneArticleParams: GetOneArticleParams;
  UpdateOneArticleParams: UpdateOneArticleParams;
  PostOneEditorParams: PostOneEditorParams;
  GetOneEditorParams: GetOneEditorParams;
  UpdateOneEditorParams: UpdateOneEditorParams;
  PostOneExpandableParams: PostOneExpandableParams;
  GetOneExpandableParams: GetOneExpandableParams;
  UpdateOneExpandableParams: UpdateOneExpandableParams;
  PostOneFilterParams: PostOneFilterParams;
  GetOneFilterParams: GetOneFilterParams;
  UpdateOneFilterParams: UpdateOneFilterParams;
  PostOneAppearanceParams: PostOneAppearanceParams;
  GetOneAppearanceParams: GetOneAppearanceParams;
  UpdateOneAppearanceParams: UpdateOneAppearanceParams;
  PostOneClicksPositionParams: PostOneClicksPositionParams;
  GetOneClicksPositionParams: GetOneClicksPositionParams;
  UpdateOneClicksPositionParams: UpdateOneClicksPositionParams;
  PostOneCountryParams: PostOneCountryParams;
  GetOneCountryParams: GetOneCountryParams;
  UpdateOneCountryParams: UpdateOneCountryParams;
  PostOneDeviceParams: PostOneDeviceParams;
  GetOneDeviceParams: GetOneDeviceParams;
  UpdateOneDeviceParams: UpdateOneDeviceParams;
  PostOnePageParams: PostOnePageParams;
  GetOnePageParams: GetOnePageParams;
  UpdateOnePageParams: UpdateOnePageParams;
  PostOneQuerySParams: PostOneQuerySParams;
  GetOneQuerySParams: GetOneQuerySParams;
  UpdateOneQuerySParams: UpdateOneQuerySParams;
  PostOneTagParams: PostOneTagParams;
  GetOneTagParams: GetOneTagParams;
  UpdateOneTagParams: UpdateOneTagParams;
  Query: ResolverTypeWrapper<{}>;
  Mutation: ResolverTypeWrapper<{}>;
  CacheControlScope: CacheControlScope;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  User: User;
  Int: Scalars['Int'];
  String: Scalars['String'];
  Article: Article;
  Boolean: Scalars['Boolean'];
  ArticleMany: ArticleMany;
  Filter: Filter;
  Editor: Editor;
  Expandable: Expandable;
  Appearance: Appearance;
  Float: Scalars['Float'];
  ClicksPosition: ClicksPosition;
  Country: Country;
  Device: Device;
  Page: Page;
  QueryS: QueryS;
  Tag: Tag;
  RegistrationParams: RegistrationParams;
  LoginParams: LoginParams;
  GetOneUserParams: GetOneUserParams;
  UpdateOneUserParams: UpdateOneUserParams;
  ArticlePaginationParams: ArticlePaginationParams;
  GetManyArticleParams: GetManyArticleParams;
  PostOneArticleParams: PostOneArticleParams;
  GetOneArticleParams: GetOneArticleParams;
  UpdateOneArticleParams: UpdateOneArticleParams;
  PostOneEditorParams: PostOneEditorParams;
  GetOneEditorParams: GetOneEditorParams;
  UpdateOneEditorParams: UpdateOneEditorParams;
  PostOneExpandableParams: PostOneExpandableParams;
  GetOneExpandableParams: GetOneExpandableParams;
  UpdateOneExpandableParams: UpdateOneExpandableParams;
  PostOneFilterParams: PostOneFilterParams;
  GetOneFilterParams: GetOneFilterParams;
  UpdateOneFilterParams: UpdateOneFilterParams;
  PostOneAppearanceParams: PostOneAppearanceParams;
  GetOneAppearanceParams: GetOneAppearanceParams;
  UpdateOneAppearanceParams: UpdateOneAppearanceParams;
  PostOneClicksPositionParams: PostOneClicksPositionParams;
  GetOneClicksPositionParams: GetOneClicksPositionParams;
  UpdateOneClicksPositionParams: UpdateOneClicksPositionParams;
  PostOneCountryParams: PostOneCountryParams;
  GetOneCountryParams: GetOneCountryParams;
  UpdateOneCountryParams: UpdateOneCountryParams;
  PostOneDeviceParams: PostOneDeviceParams;
  GetOneDeviceParams: GetOneDeviceParams;
  UpdateOneDeviceParams: UpdateOneDeviceParams;
  PostOnePageParams: PostOnePageParams;
  GetOnePageParams: GetOnePageParams;
  UpdateOnePageParams: UpdateOnePageParams;
  PostOneQuerySParams: PostOneQuerySParams;
  GetOneQuerySParams: GetOneQuerySParams;
  UpdateOneQuerySParams: UpdateOneQuerySParams;
  PostOneTagParams: PostOneTagParams;
  GetOneTagParams: GetOneTagParams;
  UpdateOneTagParams: UpdateOneTagParams;
  Query: {};
  Mutation: {};
  Upload: Scalars['Upload'];
};

export type CacheControlDirectiveArgs = {   maxAge?: Maybe<Scalars['Int']>;
  scope?: Maybe<CacheControlScope>; };

export type CacheControlDirectiveResolver<Result, Parent, ContextType = any, Args = CacheControlDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  lastLogin?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  roleName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  refreshToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArticleResolvers<ContextType = any, ParentType extends ResolversParentTypes['Article'] = ResolversParentTypes['Article']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  v?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isPublished?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  added?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  edited?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  published?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  avgTimeStory?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgAllTimeStory?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  created?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArticleManyResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArticleMany'] = ResolversParentTypes['ArticleMany']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['Article']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FilterResolvers<ContextType = any, ParentType extends ResolversParentTypes['Filter'] = ResolversParentTypes['Filter']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  filter?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EditorResolvers<ContextType = any, ParentType extends ResolversParentTypes['Editor'] = ResolversParentTypes['Editor']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  edited?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  editedPercent?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  published?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  publishedPercent?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rejected?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rejectedPercent?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ExpandableResolvers<ContextType = any, ParentType extends ResolversParentTypes['Expandable'] = ResolversParentTypes['Expandable']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  key?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  articles?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  created?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AppearanceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Appearance'] = ResolversParentTypes['Appearance']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  search?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  clicks?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  impressions?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  ctr?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  position?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClicksPositionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ClicksPosition'] = ResolversParentTypes['ClicksPosition']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  clicks?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  impressions?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  ctr?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  position?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CountryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Country'] = ResolversParentTypes['Country']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  clicks?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  impressions?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  ctr?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  position?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeviceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Device'] = ResolversParentTypes['Device']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  clicks?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  impressions?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  ctr?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  position?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Page'] = ResolversParentTypes['Page']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  clicks?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  impressions?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  ctr?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  position?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QuerySResolvers<ContextType = any, ParentType extends ResolversParentTypes['QueryS'] = ResolversParentTypes['QueryS']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  clicks?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  impressions?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  ctr?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  position?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagResolvers<ContextType = any, ParentType extends ResolversParentTypes['Tag'] = ResolversParentTypes['Tag']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  word?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  char?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getManyArticle?: Resolver<ResolversTypes['ArticleMany'], ParentType, ContextType, RequireFields<QueryGetManyArticleArgs, 'where'>>;
  getManyTag?: Resolver<Array<Maybe<ResolversTypes['Tag']>>, ParentType, ContextType>;
  getManyQueryS?: Resolver<Array<Maybe<ResolversTypes['QueryS']>>, ParentType, ContextType>;
  getManyPage?: Resolver<Array<Maybe<ResolversTypes['Page']>>, ParentType, ContextType>;
  getManyDevice?: Resolver<Array<Maybe<ResolversTypes['Device']>>, ParentType, ContextType>;
  getManyCountry?: Resolver<Array<Maybe<ResolversTypes['Country']>>, ParentType, ContextType>;
  getManyClicksPosition?: Resolver<Array<Maybe<ResolversTypes['ClicksPosition']>>, ParentType, ContextType>;
  getManyAppearance?: Resolver<Array<Maybe<ResolversTypes['Appearance']>>, ParentType, ContextType>;
  getManyFilter?: Resolver<Array<Maybe<ResolversTypes['Filter']>>, ParentType, ContextType>;
  getManyEditor?: Resolver<Array<Maybe<ResolversTypes['Editor']>>, ParentType, ContextType>;
  getManyExpandable?: Resolver<Array<Maybe<ResolversTypes['Expandable']>>, ParentType, ContextType>;
  getOneUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryGetOneUserArgs, 'where'>>;
  getOneTag?: Resolver<Maybe<ResolversTypes['Tag']>, ParentType, ContextType, RequireFields<QueryGetOneTagArgs, 'where'>>;
  getOneQueryS?: Resolver<Maybe<ResolversTypes['QueryS']>, ParentType, ContextType, RequireFields<QueryGetOneQuerySArgs, 'where'>>;
  getOnePage?: Resolver<Maybe<ResolversTypes['Page']>, ParentType, ContextType, RequireFields<QueryGetOnePageArgs, 'where'>>;
  getOneDevice?: Resolver<Maybe<ResolversTypes['Device']>, ParentType, ContextType, RequireFields<QueryGetOneDeviceArgs, 'where'>>;
  getOneCountry?: Resolver<Maybe<ResolversTypes['Country']>, ParentType, ContextType, RequireFields<QueryGetOneCountryArgs, 'where'>>;
  getOneClicksPosition?: Resolver<Maybe<ResolversTypes['ClicksPosition']>, ParentType, ContextType, RequireFields<QueryGetOneClicksPositionArgs, 'where'>>;
  getOneAppearance?: Resolver<Maybe<ResolversTypes['Appearance']>, ParentType, ContextType, RequireFields<QueryGetOneAppearanceArgs, 'where'>>;
  getOneArticle?: Resolver<Maybe<ResolversTypes['Article']>, ParentType, ContextType, RequireFields<QueryGetOneArticleArgs, 'where'>>;
  getOneFilter?: Resolver<Maybe<ResolversTypes['Filter']>, ParentType, ContextType, RequireFields<QueryGetOneFilterArgs, 'where'>>;
  getOneExpandable?: Resolver<Maybe<ResolversTypes['Expandable']>, ParentType, ContextType, RequireFields<QueryGetOneExpandableArgs, 'where'>>;
  getOneEditor?: Resolver<Maybe<ResolversTypes['Editor']>, ParentType, ContextType, RequireFields<QueryGetOneEditorArgs, 'where'>>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  registration?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationRegistrationArgs, 'data'>>;
  login?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationLoginArgs, 'data'>>;
  postOneExpandable?: Resolver<Maybe<ResolversTypes['Expandable']>, ParentType, ContextType, RequireFields<MutationPostOneExpandableArgs, 'data'>>;
  postOneTag?: Resolver<Maybe<ResolversTypes['Tag']>, ParentType, ContextType, RequireFields<MutationPostOneTagArgs, 'data'>>;
  postOneQueryS?: Resolver<Maybe<ResolversTypes['QueryS']>, ParentType, ContextType, RequireFields<MutationPostOneQuerySArgs, 'data'>>;
  postOnePage?: Resolver<Maybe<ResolversTypes['Page']>, ParentType, ContextType, RequireFields<MutationPostOnePageArgs, 'data'>>;
  postOneDevice?: Resolver<Maybe<ResolversTypes['Device']>, ParentType, ContextType, RequireFields<MutationPostOneDeviceArgs, 'data'>>;
  postOneCountry?: Resolver<Maybe<ResolversTypes['Country']>, ParentType, ContextType, RequireFields<MutationPostOneCountryArgs, 'data'>>;
  postOneClicksPosition?: Resolver<Maybe<ResolversTypes['ClicksPosition']>, ParentType, ContextType, RequireFields<MutationPostOneClicksPositionArgs, 'data'>>;
  postOneAppearance?: Resolver<Maybe<ResolversTypes['Appearance']>, ParentType, ContextType, RequireFields<MutationPostOneAppearanceArgs, 'data'>>;
  postOneFilter?: Resolver<Maybe<ResolversTypes['Filter']>, ParentType, ContextType, RequireFields<MutationPostOneFilterArgs, 'data'>>;
  postOneArticle?: Resolver<Maybe<ResolversTypes['Article']>, ParentType, ContextType, RequireFields<MutationPostOneArticleArgs, 'data'>>;
  postOneEditor?: Resolver<Maybe<ResolversTypes['Editor']>, ParentType, ContextType, RequireFields<MutationPostOneEditorArgs, 'data'>>;
  updateOneUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationUpdateOneUserArgs, 'where' | 'data'>>;
  updateOneAppearance?: Resolver<Maybe<ResolversTypes['Appearance']>, ParentType, ContextType, RequireFields<MutationUpdateOneAppearanceArgs, 'where' | 'data'>>;
  updateOneFilter?: Resolver<Maybe<ResolversTypes['Filter']>, ParentType, ContextType, RequireFields<MutationUpdateOneFilterArgs, 'where' | 'data'>>;
  updateOneClicksPosition?: Resolver<Maybe<ResolversTypes['ClicksPosition']>, ParentType, ContextType, RequireFields<MutationUpdateOneClicksPositionArgs, 'where' | 'data'>>;
  updateOneArticle?: Resolver<Maybe<ResolversTypes['Article']>, ParentType, ContextType, RequireFields<MutationUpdateOneArticleArgs, 'where' | 'data'>>;
  updateOneExpandable?: Resolver<Maybe<ResolversTypes['Expandable']>, ParentType, ContextType, RequireFields<MutationUpdateOneExpandableArgs, 'where' | 'data'>>;
  updateOneEditor?: Resolver<Maybe<ResolversTypes['Editor']>, ParentType, ContextType, RequireFields<MutationUpdateOneEditorArgs, 'where' | 'data'>>;
  updateOneCountry?: Resolver<Maybe<ResolversTypes['Country']>, ParentType, ContextType, RequireFields<MutationUpdateOneCountryArgs, 'where' | 'data'>>;
  updateOneDevice?: Resolver<Maybe<ResolversTypes['Device']>, ParentType, ContextType, RequireFields<MutationUpdateOneDeviceArgs, 'where' | 'data'>>;
  updateOnePage?: Resolver<Maybe<ResolversTypes['Page']>, ParentType, ContextType, RequireFields<MutationUpdateOnePageArgs, 'where' | 'data'>>;
  updateOneQueryS?: Resolver<Maybe<ResolversTypes['QueryS']>, ParentType, ContextType, RequireFields<MutationUpdateOneQuerySArgs, 'where' | 'data'>>;
  updateOneTag?: Resolver<Maybe<ResolversTypes['Tag']>, ParentType, ContextType, RequireFields<MutationUpdateOneTagArgs, 'where' | 'data'>>;
  deleteOneUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationDeleteOneUserArgs, 'where'>>;
  deleteOneTag?: Resolver<Maybe<ResolversTypes['Tag']>, ParentType, ContextType, RequireFields<MutationDeleteOneTagArgs, 'where'>>;
  deleteOneQueryS?: Resolver<Maybe<ResolversTypes['QueryS']>, ParentType, ContextType, RequireFields<MutationDeleteOneQuerySArgs, 'where'>>;
  deleteOnePage?: Resolver<Maybe<ResolversTypes['Page']>, ParentType, ContextType, RequireFields<MutationDeleteOnePageArgs, 'where'>>;
  deleteOneDevice?: Resolver<Maybe<ResolversTypes['Device']>, ParentType, ContextType, RequireFields<MutationDeleteOneDeviceArgs, 'where'>>;
  deleteOneCountry?: Resolver<Maybe<ResolversTypes['Country']>, ParentType, ContextType, RequireFields<MutationDeleteOneCountryArgs, 'where'>>;
  deleteOneClicksPosition?: Resolver<Maybe<ResolversTypes['ClicksPosition']>, ParentType, ContextType, RequireFields<MutationDeleteOneClicksPositionArgs, 'where'>>;
  deleteOneAppearance?: Resolver<Maybe<ResolversTypes['Appearance']>, ParentType, ContextType, RequireFields<MutationDeleteOneAppearanceArgs, 'where'>>;
  deleteOneFilter?: Resolver<Maybe<ResolversTypes['Filter']>, ParentType, ContextType, RequireFields<MutationDeleteOneFilterArgs, 'where'>>;
  deleteOneArticle?: Resolver<Maybe<ResolversTypes['Article']>, ParentType, ContextType, RequireFields<MutationDeleteOneArticleArgs, 'where'>>;
  deleteOneExpandable?: Resolver<Maybe<ResolversTypes['Expandable']>, ParentType, ContextType, RequireFields<MutationDeleteOneExpandableArgs, 'where'>>;
  deleteOneEditor?: Resolver<Maybe<ResolversTypes['Editor']>, ParentType, ContextType, RequireFields<MutationDeleteOneEditorArgs, 'where'>>;
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type Resolvers<ContextType = any> = {
  User?: UserResolvers<ContextType>;
  Article?: ArticleResolvers<ContextType>;
  ArticleMany?: ArticleManyResolvers<ContextType>;
  Filter?: FilterResolvers<ContextType>;
  Editor?: EditorResolvers<ContextType>;
  Expandable?: ExpandableResolvers<ContextType>;
  Appearance?: AppearanceResolvers<ContextType>;
  ClicksPosition?: ClicksPositionResolvers<ContextType>;
  Country?: CountryResolvers<ContextType>;
  Device?: DeviceResolvers<ContextType>;
  Page?: PageResolvers<ContextType>;
  QueryS?: QuerySResolvers<ContextType>;
  Tag?: TagResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Upload?: GraphQLScalarType;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
export type DirectiveResolvers<ContextType = any> = {
  cacheControl?: CacheControlDirectiveResolver<any, any, ContextType>;
};


/**
 * @deprecated
 * Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
 */
export type IDirectiveResolvers<ContextType = any> = DirectiveResolvers<ContextType>;