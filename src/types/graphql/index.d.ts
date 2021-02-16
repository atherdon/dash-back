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
  isPublished: Scalars['String'];
  added: Scalars['String'];
  edited: Scalars['String'];
  published: Scalars['String'];
  avgTimeStory: Scalars['String'];
  avgAllTimeStory: Scalars['String'];
  created: Scalars['String'];
  updated: Scalars['String'];
};

export type Filter = {
  __typename?: 'Filter';
  id: Scalars['Int'];
  filter: Scalars['String'];
  value: Scalars['String'];
  created: Scalars['String'];
  updated: Scalars['String'];
};

export type Brand = {
  __typename?: 'Brand';
  id: Scalars['Int'];
  v: Scalars['String'];
  url: Scalars['String'];
  email: Scalars['String'];
  isPublished: Scalars['String'];
  added: Scalars['String'];
  edited: Scalars['String'];
  published: Scalars['String'];
  avgTimeStory: Scalars['String'];
  avgAllTimeStory: Scalars['String'];
  created: Scalars['String'];
  updated: Scalars['String'];
};

export type TopAuthor = {
  __typename?: 'TopAuthor';
  id: Scalars['Int'];
  v: Scalars['String'];
  url: Scalars['String'];
  email: Scalars['String'];
  isPublished: Scalars['String'];
  added: Scalars['String'];
  edited: Scalars['String'];
  published: Scalars['String'];
  avgTimeStory: Scalars['String'];
  avgAllTimeStory: Scalars['String'];
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
  age: Scalars['Int'];
  address: Scalars['String'];
  description: Scalars['String'];
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

export type PostOneArticleParams = {
  v: Scalars['String'];
  url: Scalars['String'];
  email: Scalars['String'];
  isPublished: Scalars['String'];
  added: Scalars['String'];
  edited: Scalars['String'];
  published: Scalars['String'];
  avgTimeStory: Scalars['String'];
  avgAllTimeStory: Scalars['String'];
};

export type GetOneArticleParams = {
  id: Scalars['Int'];
};

export type UpdateOneArticleParams = {
  v?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  isPublished?: Maybe<Scalars['String']>;
  added?: Maybe<Scalars['String']>;
  edited?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['String']>;
  avgTimeStory?: Maybe<Scalars['String']>;
  avgAllTimeStory?: Maybe<Scalars['String']>;
};

export type PostOneBrandParams = {
  v: Scalars['String'];
  url: Scalars['String'];
  email: Scalars['String'];
  isPublished: Scalars['String'];
  added: Scalars['String'];
  edited: Scalars['String'];
  published: Scalars['String'];
  avgTimeStory: Scalars['String'];
  avgAllTimeStory: Scalars['String'];
};

export type GetOneBrandParams = {
  id: Scalars['Int'];
};

export type UpdateOneBrandParams = {
  v?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  isPublished?: Maybe<Scalars['String']>;
  added?: Maybe<Scalars['String']>;
  edited?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['String']>;
  avgTimeStory?: Maybe<Scalars['String']>;
  avgAllTimeStory?: Maybe<Scalars['String']>;
};

export type PostOneTopAuthorParams = {
  v: Scalars['String'];
  url: Scalars['String'];
  email: Scalars['String'];
  isPublished: Scalars['String'];
  added: Scalars['String'];
  edited: Scalars['String'];
  published: Scalars['String'];
  avgTimeStory: Scalars['String'];
  avgAllTimeStory: Scalars['String'];
};

export type GetOneTopAuthorParams = {
  id: Scalars['Int'];
};

export type UpdateOneTopAuthorParams = {
  v?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  isPublished?: Maybe<Scalars['String']>;
  added?: Maybe<Scalars['String']>;
  edited?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['String']>;
  avgTimeStory?: Maybe<Scalars['String']>;
  avgAllTimeStory?: Maybe<Scalars['String']>;
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
  age: Scalars['Int'];
  address: Scalars['String'];
  description: Scalars['String'];
};

export type GetOneExpandableParams = {
  id: Scalars['Int'];
};

export type UpdateOneExpandableParams = {
  key?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['Int']>;
  address?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
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

export type Query = {
  __typename?: 'Query';
  getManyArticle: Array<Maybe<Article>>;
  getManyClicksPosition: Array<Maybe<ClicksPosition>>;
  getManyAppearance: Array<Maybe<Appearance>>;
  getManyFilter: Array<Maybe<Filter>>;
  getManyBrand: Array<Maybe<Brand>>;
  getManyTopAuthor: Array<Maybe<TopAuthor>>;
  getManyEditor: Array<Maybe<Editor>>;
  getManyExpandable: Array<Maybe<Expandable>>;
  getOneUser?: Maybe<User>;
  getOneClicksPosition?: Maybe<ClicksPosition>;
  getOneAppearance?: Maybe<Appearance>;
  getOneArticle?: Maybe<Article>;
  getOneFilter?: Maybe<Filter>;
  getOneExpandable?: Maybe<Expandable>;
  getOneBrand?: Maybe<Brand>;
  getOneTopAuthor?: Maybe<TopAuthor>;
  getOneEditor?: Maybe<Editor>;
};


export type QueryGetOneUserArgs = {
  where: GetOneUserParams;
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


export type QueryGetOneBrandArgs = {
  where: GetOneBrandParams;
};


export type QueryGetOneTopAuthorArgs = {
  where: GetOneTopAuthorParams;
};


export type QueryGetOneEditorArgs = {
  where: GetOneEditorParams;
};

export type Mutation = {
  __typename?: 'Mutation';
  registration?: Maybe<User>;
  login?: Maybe<User>;
  postOneExpandable?: Maybe<Expandable>;
  postOneBrand?: Maybe<Brand>;
  postOneClicksPosition?: Maybe<ClicksPosition>;
  postOneAppearance?: Maybe<Appearance>;
  postOneFilter?: Maybe<Filter>;
  postOneArticle?: Maybe<Article>;
  postOneTopAuthor?: Maybe<TopAuthor>;
  postOneEditor?: Maybe<Editor>;
  updateOneUser?: Maybe<User>;
  updateOneAppearance?: Maybe<Appearance>;
  updateOneFilter?: Maybe<Filter>;
  updateOneClicksPosition?: Maybe<ClicksPosition>;
  updateOneArticle?: Maybe<Article>;
  updateOneBrand?: Maybe<Brand>;
  updateOneExpandable?: Maybe<Expandable>;
  updateOneTopAuthor?: Maybe<TopAuthor>;
  updateOneEditor?: Maybe<Editor>;
  deleteOneUser?: Maybe<User>;
  deleteOneClicksPosition?: Maybe<ClicksPosition>;
  deleteOneAppearance?: Maybe<Appearance>;
  deleteOneFilter?: Maybe<Filter>;
  deleteOneArticle?: Maybe<Article>;
  deleteOneExpandable?: Maybe<Expandable>;
  deleteOneBrand?: Maybe<Brand>;
  deleteOneTopAuthor?: Maybe<TopAuthor>;
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


export type MutationPostOneBrandArgs = {
  data: PostOneBrandParams;
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


export type MutationPostOneTopAuthorArgs = {
  data: PostOneTopAuthorParams;
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


export type MutationUpdateOneBrandArgs = {
  where: GetOneBrandParams;
  data: UpdateOneBrandParams;
};


export type MutationUpdateOneExpandableArgs = {
  where: GetOneExpandableParams;
  data: UpdateOneExpandableParams;
};


export type MutationUpdateOneTopAuthorArgs = {
  where: GetOneTopAuthorParams;
  data: UpdateOneTopAuthorParams;
};


export type MutationUpdateOneEditorArgs = {
  where: GetOneEditorParams;
  data: UpdateOneEditorParams;
};


export type MutationDeleteOneUserArgs = {
  where: GetOneUserParams;
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


export type MutationDeleteOneBrandArgs = {
  where: GetOneBrandParams;
};


export type MutationDeleteOneTopAuthorArgs = {
  where: GetOneTopAuthorParams;
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
  Filter: ResolverTypeWrapper<Filter>;
  Brand: ResolverTypeWrapper<Brand>;
  TopAuthor: ResolverTypeWrapper<TopAuthor>;
  Editor: ResolverTypeWrapper<Editor>;
  Expandable: ResolverTypeWrapper<Expandable>;
  Appearance: ResolverTypeWrapper<Appearance>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ClicksPosition: ResolverTypeWrapper<ClicksPosition>;
  RegistrationParams: RegistrationParams;
  LoginParams: LoginParams;
  GetOneUserParams: GetOneUserParams;
  UpdateOneUserParams: UpdateOneUserParams;
  PostOneArticleParams: PostOneArticleParams;
  GetOneArticleParams: GetOneArticleParams;
  UpdateOneArticleParams: UpdateOneArticleParams;
  PostOneBrandParams: PostOneBrandParams;
  GetOneBrandParams: GetOneBrandParams;
  UpdateOneBrandParams: UpdateOneBrandParams;
  PostOneTopAuthorParams: PostOneTopAuthorParams;
  GetOneTopAuthorParams: GetOneTopAuthorParams;
  UpdateOneTopAuthorParams: UpdateOneTopAuthorParams;
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
  Query: ResolverTypeWrapper<{}>;
  Mutation: ResolverTypeWrapper<{}>;
  CacheControlScope: CacheControlScope;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  User: User;
  Int: Scalars['Int'];
  String: Scalars['String'];
  Article: Article;
  Filter: Filter;
  Brand: Brand;
  TopAuthor: TopAuthor;
  Editor: Editor;
  Expandable: Expandable;
  Appearance: Appearance;
  Float: Scalars['Float'];
  ClicksPosition: ClicksPosition;
  RegistrationParams: RegistrationParams;
  LoginParams: LoginParams;
  GetOneUserParams: GetOneUserParams;
  UpdateOneUserParams: UpdateOneUserParams;
  PostOneArticleParams: PostOneArticleParams;
  GetOneArticleParams: GetOneArticleParams;
  UpdateOneArticleParams: UpdateOneArticleParams;
  PostOneBrandParams: PostOneBrandParams;
  GetOneBrandParams: GetOneBrandParams;
  UpdateOneBrandParams: UpdateOneBrandParams;
  PostOneTopAuthorParams: PostOneTopAuthorParams;
  GetOneTopAuthorParams: GetOneTopAuthorParams;
  UpdateOneTopAuthorParams: UpdateOneTopAuthorParams;
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
  Query: {};
  Mutation: {};
  Upload: Scalars['Upload'];
  Boolean: Scalars['Boolean'];
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
  isPublished?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  added?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  edited?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  published?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  avgTimeStory?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  avgAllTimeStory?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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

export type BrandResolvers<ContextType = any, ParentType extends ResolversParentTypes['Brand'] = ResolversParentTypes['Brand']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  v?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isPublished?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  added?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  edited?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  published?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  avgTimeStory?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  avgAllTimeStory?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TopAuthorResolvers<ContextType = any, ParentType extends ResolversParentTypes['TopAuthor'] = ResolversParentTypes['TopAuthor']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  v?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isPublished?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  added?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  edited?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  published?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  avgTimeStory?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  avgAllTimeStory?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  age?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getManyArticle?: Resolver<Array<Maybe<ResolversTypes['Article']>>, ParentType, ContextType>;
  getManyClicksPosition?: Resolver<Array<Maybe<ResolversTypes['ClicksPosition']>>, ParentType, ContextType>;
  getManyAppearance?: Resolver<Array<Maybe<ResolversTypes['Appearance']>>, ParentType, ContextType>;
  getManyFilter?: Resolver<Array<Maybe<ResolversTypes['Filter']>>, ParentType, ContextType>;
  getManyBrand?: Resolver<Array<Maybe<ResolversTypes['Brand']>>, ParentType, ContextType>;
  getManyTopAuthor?: Resolver<Array<Maybe<ResolversTypes['TopAuthor']>>, ParentType, ContextType>;
  getManyEditor?: Resolver<Array<Maybe<ResolversTypes['Editor']>>, ParentType, ContextType>;
  getManyExpandable?: Resolver<Array<Maybe<ResolversTypes['Expandable']>>, ParentType, ContextType>;
  getOneUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryGetOneUserArgs, 'where'>>;
  getOneClicksPosition?: Resolver<Maybe<ResolversTypes['ClicksPosition']>, ParentType, ContextType, RequireFields<QueryGetOneClicksPositionArgs, 'where'>>;
  getOneAppearance?: Resolver<Maybe<ResolversTypes['Appearance']>, ParentType, ContextType, RequireFields<QueryGetOneAppearanceArgs, 'where'>>;
  getOneArticle?: Resolver<Maybe<ResolversTypes['Article']>, ParentType, ContextType, RequireFields<QueryGetOneArticleArgs, 'where'>>;
  getOneFilter?: Resolver<Maybe<ResolversTypes['Filter']>, ParentType, ContextType, RequireFields<QueryGetOneFilterArgs, 'where'>>;
  getOneExpandable?: Resolver<Maybe<ResolversTypes['Expandable']>, ParentType, ContextType, RequireFields<QueryGetOneExpandableArgs, 'where'>>;
  getOneBrand?: Resolver<Maybe<ResolversTypes['Brand']>, ParentType, ContextType, RequireFields<QueryGetOneBrandArgs, 'where'>>;
  getOneTopAuthor?: Resolver<Maybe<ResolversTypes['TopAuthor']>, ParentType, ContextType, RequireFields<QueryGetOneTopAuthorArgs, 'where'>>;
  getOneEditor?: Resolver<Maybe<ResolversTypes['Editor']>, ParentType, ContextType, RequireFields<QueryGetOneEditorArgs, 'where'>>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  registration?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationRegistrationArgs, 'data'>>;
  login?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationLoginArgs, 'data'>>;
  postOneExpandable?: Resolver<Maybe<ResolversTypes['Expandable']>, ParentType, ContextType, RequireFields<MutationPostOneExpandableArgs, 'data'>>;
  postOneBrand?: Resolver<Maybe<ResolversTypes['Brand']>, ParentType, ContextType, RequireFields<MutationPostOneBrandArgs, 'data'>>;
  postOneClicksPosition?: Resolver<Maybe<ResolversTypes['ClicksPosition']>, ParentType, ContextType, RequireFields<MutationPostOneClicksPositionArgs, 'data'>>;
  postOneAppearance?: Resolver<Maybe<ResolversTypes['Appearance']>, ParentType, ContextType, RequireFields<MutationPostOneAppearanceArgs, 'data'>>;
  postOneFilter?: Resolver<Maybe<ResolversTypes['Filter']>, ParentType, ContextType, RequireFields<MutationPostOneFilterArgs, 'data'>>;
  postOneArticle?: Resolver<Maybe<ResolversTypes['Article']>, ParentType, ContextType, RequireFields<MutationPostOneArticleArgs, 'data'>>;
  postOneTopAuthor?: Resolver<Maybe<ResolversTypes['TopAuthor']>, ParentType, ContextType, RequireFields<MutationPostOneTopAuthorArgs, 'data'>>;
  postOneEditor?: Resolver<Maybe<ResolversTypes['Editor']>, ParentType, ContextType, RequireFields<MutationPostOneEditorArgs, 'data'>>;
  updateOneUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationUpdateOneUserArgs, 'where' | 'data'>>;
  updateOneAppearance?: Resolver<Maybe<ResolversTypes['Appearance']>, ParentType, ContextType, RequireFields<MutationUpdateOneAppearanceArgs, 'where' | 'data'>>;
  updateOneFilter?: Resolver<Maybe<ResolversTypes['Filter']>, ParentType, ContextType, RequireFields<MutationUpdateOneFilterArgs, 'where' | 'data'>>;
  updateOneClicksPosition?: Resolver<Maybe<ResolversTypes['ClicksPosition']>, ParentType, ContextType, RequireFields<MutationUpdateOneClicksPositionArgs, 'where' | 'data'>>;
  updateOneArticle?: Resolver<Maybe<ResolversTypes['Article']>, ParentType, ContextType, RequireFields<MutationUpdateOneArticleArgs, 'where' | 'data'>>;
  updateOneBrand?: Resolver<Maybe<ResolversTypes['Brand']>, ParentType, ContextType, RequireFields<MutationUpdateOneBrandArgs, 'where' | 'data'>>;
  updateOneExpandable?: Resolver<Maybe<ResolversTypes['Expandable']>, ParentType, ContextType, RequireFields<MutationUpdateOneExpandableArgs, 'where' | 'data'>>;
  updateOneTopAuthor?: Resolver<Maybe<ResolversTypes['TopAuthor']>, ParentType, ContextType, RequireFields<MutationUpdateOneTopAuthorArgs, 'where' | 'data'>>;
  updateOneEditor?: Resolver<Maybe<ResolversTypes['Editor']>, ParentType, ContextType, RequireFields<MutationUpdateOneEditorArgs, 'where' | 'data'>>;
  deleteOneUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationDeleteOneUserArgs, 'where'>>;
  deleteOneClicksPosition?: Resolver<Maybe<ResolversTypes['ClicksPosition']>, ParentType, ContextType, RequireFields<MutationDeleteOneClicksPositionArgs, 'where'>>;
  deleteOneAppearance?: Resolver<Maybe<ResolversTypes['Appearance']>, ParentType, ContextType, RequireFields<MutationDeleteOneAppearanceArgs, 'where'>>;
  deleteOneFilter?: Resolver<Maybe<ResolversTypes['Filter']>, ParentType, ContextType, RequireFields<MutationDeleteOneFilterArgs, 'where'>>;
  deleteOneArticle?: Resolver<Maybe<ResolversTypes['Article']>, ParentType, ContextType, RequireFields<MutationDeleteOneArticleArgs, 'where'>>;
  deleteOneExpandable?: Resolver<Maybe<ResolversTypes['Expandable']>, ParentType, ContextType, RequireFields<MutationDeleteOneExpandableArgs, 'where'>>;
  deleteOneBrand?: Resolver<Maybe<ResolversTypes['Brand']>, ParentType, ContextType, RequireFields<MutationDeleteOneBrandArgs, 'where'>>;
  deleteOneTopAuthor?: Resolver<Maybe<ResolversTypes['TopAuthor']>, ParentType, ContextType, RequireFields<MutationDeleteOneTopAuthorArgs, 'where'>>;
  deleteOneEditor?: Resolver<Maybe<ResolversTypes['Editor']>, ParentType, ContextType, RequireFields<MutationDeleteOneEditorArgs, 'where'>>;
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type Resolvers<ContextType = any> = {
  User?: UserResolvers<ContextType>;
  Article?: ArticleResolvers<ContextType>;
  Filter?: FilterResolvers<ContextType>;
  Brand?: BrandResolvers<ContextType>;
  TopAuthor?: TopAuthorResolvers<ContextType>;
  Editor?: EditorResolvers<ContextType>;
  Expandable?: ExpandableResolvers<ContextType>;
  Appearance?: AppearanceResolvers<ContextType>;
  ClicksPosition?: ClicksPositionResolvers<ContextType>;
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