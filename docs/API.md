# API documentation

#### Documents
- [Package instruction](../README.md)
- [Contributing information](./CONTRIBUTING.md)
- [Changelog](./CHANGELOG.md)

#### Menu
- [Introduction](#introduction)
- [Schema](#schema)
- - [Brand](#brand)
- - - [Post one](#post-one-brand)

### Introduction
"Dash back" server use GraphQL query language schema.  

By default server listen on: `http://localhost:4000/graphql`  

Examples of request place in Postman_collection files from dir `resources/postman`.
### Schema
GraphQL schema: [src/graphql/Schema.ts](./src/graphql/Schema.ts)  

Types of schema: [src/types/graphql/index.d.ts](./src/types/graphql/index.d.ts)

All requests return the type `Response`:
```typescript

// Wrong parameters type
type WrongParam = {
  __typename?: 'WrongParams';
  name: Scalars['String'];
  required: Scalars['String'];
  received: Scalars['String'];
};

// Response type
type Response = {
  __typename?: 'Response';
  status: Scalars['String']; // status ['error', 'warning', 'success']
  message: Scalars['String']; // message of request result
  stdErrorMessage?: Maybe<Scalars['String']>; // standart error message: (NODE_ENV === production ? "" : {string}) | {null}
  httpCode: Scalars['Int']; // Number of http response code
  brand?: Maybe<Brand>; // one of @return "brand" objects
  wrongParameter?: Maybe<WrongParam>; // Array of wrong parameters
  ...
};
```

#### Brand
##### Post one brand
```
@param params — [GraphQL.MutationPostBrandArgs]

@return — "brand" [GraphQL.Brand]
```