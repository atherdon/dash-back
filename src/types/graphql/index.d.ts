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
  token?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
};

export type Brand = {
  __typename?: 'Brand';
  id: Scalars['Int'];
  url: Scalars['String'];
  email: Scalars['String'];
  created: Scalars['String'];
  updated: Scalars['String'];
  avgTimeStory: Scalars['Float'];
  avgAllTimeStory: Scalars['Float'];
};

export type Author = {
  __typename?: 'Author';
  id: Scalars['Int'];
  url: Scalars['String'];
  email: Scalars['String'];
  isPublished: Scalars['Boolean'];
  created: Scalars['String'];
  edited: Scalars['String'];
  updated: Scalars['String'];
  published: Scalars['String'];
  avgTimeStory: Scalars['Float'];
  avgAllTimeStory: Scalars['Float'];
};

export type Editor = {
  __typename?: 'Editor';
  id: Scalars['Int'];
  name: Scalars['String'];
  edited: Scalars['Int'];
  editedPercent: Scalars['Float'];
  published: Scalars['Int'];
  publishedPercent: Scalars['Float'];
  rejected: Scalars['Int'];
  rejectedPercent: Scalars['Float'];
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
  role?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type PostOneBrandParams = {
  url: Scalars['String'];
  email: Scalars['String'];
};

export type GetOneBrandParams = {
  id: Scalars['Int'];
};

export type UpdateOneBrandParams = {
  url?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  avgTimeStory?: Maybe<Scalars['Float']>;
  avgAllTimeStory?: Maybe<Scalars['Float']>;
};

export type PostOneAuthorParams = {
  url: Scalars['String'];
  email: Scalars['String'];
};

export type GetOneAuthorParams = {
  id: Scalars['Int'];
};

export type UpdateOneAuthorParams = {
  url?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  isPublished?: Maybe<Scalars['Boolean']>;
  edited?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['String']>;
  avgTimeStory?: Maybe<Scalars['Float']>;
  avgAllTimeStory?: Maybe<Scalars['Float']>;
};

export type PostOneEditorParams = {
  name: Scalars['String'];
};

export type GetOneEditorParams = {
  id: Scalars['Int'];
};

export type UpdateOneEditorParams = {
  name?: Maybe<Scalars['String']>;
  edited?: Maybe<Scalars['Int']>;
  editedPercent?: Maybe<Scalars['Float']>;
  published?: Maybe<Scalars['Int']>;
  publishedPercent?: Maybe<Scalars['Float']>;
  rejected?: Maybe<Scalars['Int']>;
  rejectedPercent?: Maybe<Scalars['Float']>;
};

export type Query = {
  __typename?: 'Query';
  getManyBrand: Array<Maybe<Brand>>;
  getManyAuthor: Array<Maybe<Author>>;
  getManyEditor: Array<Maybe<Editor>>;
  getOneUser?: Maybe<User>;
  getOneBrand?: Maybe<Brand>;
  getOneAuthor?: Maybe<Author>;
  getOneEditor?: Maybe<Editor>;
};


export type QueryGetOneUserArgs = {
  where: GetOneUserParams;
};


export type QueryGetOneBrandArgs = {
  where: GetOneBrandParams;
};


export type QueryGetOneAuthorArgs = {
  where: GetOneAuthorParams;
};


export type QueryGetOneEditorArgs = {
  where: GetOneEditorParams;
};

export type Mutation = {
  __typename?: 'Mutation';
  registration?: Maybe<User>;
  login?: Maybe<User>;
  postOneBrand?: Maybe<Brand>;
  postOneAuthor?: Maybe<Author>;
  postOneEditor?: Maybe<Editor>;
  updateOneBrand?: Maybe<Brand>;
  updateOneAuthor?: Maybe<Author>;
  updateOneEditor?: Maybe<Editor>;
  deleteOneBrand?: Maybe<Brand>;
  deleteOneAuthor?: Maybe<Author>;
  deleteOneEditor?: Maybe<Editor>;
};


export type MutationRegistrationArgs = {
  data: RegistrationParams;
};


export type MutationLoginArgs = {
  data: LoginParams;
};


export type MutationPostOneBrandArgs = {
  data: PostOneBrandParams;
};


export type MutationPostOneAuthorArgs = {
  data: PostOneAuthorParams;
};


export type MutationPostOneEditorArgs = {
  data: PostOneEditorParams;
};


export type MutationUpdateOneBrandArgs = {
  where: GetOneBrandParams;
  data: UpdateOneBrandParams;
};


export type MutationUpdateOneAuthorArgs = {
  where: GetOneAuthorParams;
  data: UpdateOneAuthorParams;
};


export type MutationUpdateOneEditorArgs = {
  where: GetOneEditorParams;
  data: UpdateOneEditorParams;
};


export type MutationDeleteOneBrandArgs = {
  where: GetOneBrandParams;
};


export type MutationDeleteOneAuthorArgs = {
  where: GetOneAuthorParams;
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
  Brand: ResolverTypeWrapper<Brand>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Author: ResolverTypeWrapper<Author>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Editor: ResolverTypeWrapper<Editor>;
  RegistrationParams: RegistrationParams;
  LoginParams: LoginParams;
  GetOneUserParams: GetOneUserParams;
  UpdateOneUserParams: UpdateOneUserParams;
  PostOneBrandParams: PostOneBrandParams;
  GetOneBrandParams: GetOneBrandParams;
  UpdateOneBrandParams: UpdateOneBrandParams;
  PostOneAuthorParams: PostOneAuthorParams;
  GetOneAuthorParams: GetOneAuthorParams;
  UpdateOneAuthorParams: UpdateOneAuthorParams;
  PostOneEditorParams: PostOneEditorParams;
  GetOneEditorParams: GetOneEditorParams;
  UpdateOneEditorParams: UpdateOneEditorParams;
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
  Brand: Brand;
  Float: Scalars['Float'];
  Author: Author;
  Boolean: Scalars['Boolean'];
  Editor: Editor;
  RegistrationParams: RegistrationParams;
  LoginParams: LoginParams;
  GetOneUserParams: GetOneUserParams;
  UpdateOneUserParams: UpdateOneUserParams;
  PostOneBrandParams: PostOneBrandParams;
  GetOneBrandParams: GetOneBrandParams;
  UpdateOneBrandParams: UpdateOneBrandParams;
  PostOneAuthorParams: PostOneAuthorParams;
  GetOneAuthorParams: GetOneAuthorParams;
  UpdateOneAuthorParams: UpdateOneAuthorParams;
  PostOneEditorParams: PostOneEditorParams;
  GetOneEditorParams: GetOneEditorParams;
  UpdateOneEditorParams: UpdateOneEditorParams;
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
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  refreshToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BrandResolvers<ContextType = any, ParentType extends ResolversParentTypes['Brand'] = ResolversParentTypes['Brand']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  avgTimeStory?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  avgAllTimeStory?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthorResolvers<ContextType = any, ParentType extends ResolversParentTypes['Author'] = ResolversParentTypes['Author']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isPublished?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  edited?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  published?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  avgTimeStory?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  avgAllTimeStory?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EditorResolvers<ContextType = any, ParentType extends ResolversParentTypes['Editor'] = ResolversParentTypes['Editor']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  edited?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  editedPercent?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  published?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  publishedPercent?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  rejected?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rejectedPercent?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getManyBrand?: Resolver<Array<Maybe<ResolversTypes['Brand']>>, ParentType, ContextType>;
  getManyAuthor?: Resolver<Array<Maybe<ResolversTypes['Author']>>, ParentType, ContextType>;
  getManyEditor?: Resolver<Array<Maybe<ResolversTypes['Editor']>>, ParentType, ContextType>;
  getOneUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryGetOneUserArgs, 'where'>>;
  getOneBrand?: Resolver<Maybe<ResolversTypes['Brand']>, ParentType, ContextType, RequireFields<QueryGetOneBrandArgs, 'where'>>;
  getOneAuthor?: Resolver<Maybe<ResolversTypes['Author']>, ParentType, ContextType, RequireFields<QueryGetOneAuthorArgs, 'where'>>;
  getOneEditor?: Resolver<Maybe<ResolversTypes['Editor']>, ParentType, ContextType, RequireFields<QueryGetOneEditorArgs, 'where'>>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  registration?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationRegistrationArgs, 'data'>>;
  login?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationLoginArgs, 'data'>>;
  postOneBrand?: Resolver<Maybe<ResolversTypes['Brand']>, ParentType, ContextType, RequireFields<MutationPostOneBrandArgs, 'data'>>;
  postOneAuthor?: Resolver<Maybe<ResolversTypes['Author']>, ParentType, ContextType, RequireFields<MutationPostOneAuthorArgs, 'data'>>;
  postOneEditor?: Resolver<Maybe<ResolversTypes['Editor']>, ParentType, ContextType, RequireFields<MutationPostOneEditorArgs, 'data'>>;
  updateOneBrand?: Resolver<Maybe<ResolversTypes['Brand']>, ParentType, ContextType, RequireFields<MutationUpdateOneBrandArgs, 'where' | 'data'>>;
  updateOneAuthor?: Resolver<Maybe<ResolversTypes['Author']>, ParentType, ContextType, RequireFields<MutationUpdateOneAuthorArgs, 'where' | 'data'>>;
  updateOneEditor?: Resolver<Maybe<ResolversTypes['Editor']>, ParentType, ContextType, RequireFields<MutationUpdateOneEditorArgs, 'where' | 'data'>>;
  deleteOneBrand?: Resolver<Maybe<ResolversTypes['Brand']>, ParentType, ContextType, RequireFields<MutationDeleteOneBrandArgs, 'where'>>;
  deleteOneAuthor?: Resolver<Maybe<ResolversTypes['Author']>, ParentType, ContextType, RequireFields<MutationDeleteOneAuthorArgs, 'where'>>;
  deleteOneEditor?: Resolver<Maybe<ResolversTypes['Editor']>, ParentType, ContextType, RequireFields<MutationDeleteOneEditorArgs, 'where'>>;
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type Resolvers<ContextType = any> = {
  User?: UserResolvers<ContextType>;
  Brand?: BrandResolvers<ContextType>;
  Author?: AuthorResolvers<ContextType>;
  Editor?: EditorResolvers<ContextType>;
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