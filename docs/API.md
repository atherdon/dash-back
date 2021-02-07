# API documentation

#### Documents
- [Package instruction](../README.md)
- [Contributing information](./CONTRIBUTING.md)
- [Changelog](./CHANGELOG.md)

#### Menu
- [Introduction](#introduction)
- [Schema](#schema)
- - [Brand](#brand)
- - - [Get one](#get-one-brand)
- - - [Get many](#get-many-brands)
- - - [Post one](#post-one-brand)
- - - [Update one](#update-one-brand)
- - - [Delete one](#delete-one-brand)
- - [Author](#author)
- - - [Get one](#get-one-author)
- - - [Get many](#get-many-authors)
- - - [Post one](#post-one-author)
- - - [Update one](#update-one-author)
- - - [Delete one](#delete-one-author)
- - [Editor](#editor)
- - - [Get one](#get-one-editor)
- - - [Get many](#get-many-editors)
- - - [Post one](#post-one-editor)
- - - [Update one](#update-one-editor)
- - - [Delete one](#delete-one-editor)

### Introduction
"Dash back" server use GraphQL query language schema.  

By default server listen on: `http://localhost:4000/graphql`  

Examples of request place in Postman_collection files from dir `resources/postman`.
### Schema
GraphQL schema: [src/graphql/Schema.ts](./src/graphql/Schema.ts)  

Types of schema: [src/types/graphql/index.d.ts](./src/types/graphql/index.d.ts)

All requests return the type `Response`:
```typescript

// Response type
type Response = {
  __typename?: 'Response';
  status: Scalars['String']; // status ['error', 'warning', 'success']
  message: Scalars['String']; // message of request result
  stdErrorMessage?: Maybe<Scalars['String']>; // standart error message: (NODE_ENV === production ? "" : {string}) | {null}
  httpCode: Scalars['Int']; // Number of http response code
  brand?: Maybe<Brand>; // one of @return "brand" objects
  ...
};
```

#### Brand
##### Get many brands
```
@param void

@return — "brands" [GraphQL.Brands]
```
##### Get one brand
```
@param where — [GraphQL.GetOneBrandParams]

@return — "brand" [GraphQL.Brand]
```
##### Post one brand
```
@param data — [GraphQL.Brand]

@return — "brand" [GraphQL.Brand]
```

##### Update one brand
```
@param where — [GraphQL.GetOneBrandParams]

@param data — [GraphQL.UpdateOneBrandParams]

@return — "brand" [GraphQL.Brand]
```
##### Delete one brand
```
@param where — [GraphQL.GetOneBrandParams]

@param data — [GraphQL.UpdateOneBrandParams]

@return — "brand" [GraphQL.Brand]
```
### Author
##### Get many authors
```
@param void

@return — "authors" [GraphQL.Authors]
```
##### Get one author
```
@param where — [GraphQL.GetOneAuthorParams]

@return — "author" [GraphQL.Author]
```
##### Post one author
```
@param data — [GraphQL.Author]

@return — "author" [GraphQL.Author]
```

##### Update one author
```
@param where — [GraphQL.GetOneAuthorParams]

@param data — [GraphQL.UpdateOneAuthorParams]

@return — "author" [GraphQL.Brand]
```
##### Delete one author
```
@param where — [GraphQL.GetOneAuthorParams]

@param data — [GraphQL.UpdateOneAuthorParams]

@return — "author" [GraphQL.Author]
```
### Editor
##### Get many editors
```
@param void

@return — "editors" [GraphQL.Editors]
```
##### Get one editor
```
@param where — [GraphQL.GetOneEditorParams]

@return — "editor" [GraphQL.Editor]
```
##### Post one editor
```
@param data — [GraphQL.Editor]

@return — "editor" [GraphQL.Editor]
```

##### Update one editor
```
@param where — [GraphQL.GetOneEditorParams]

@param data — [GraphQL.UpdateOneEditorParams]

@return — "editor" [GraphQL.Editor]
```
##### Delete one editor
```
@param where — [GraphQL.GetOneEditorParams]

@param data — [GraphQL.UpdateOneEditorParams]

@return — "editor" [GraphQL.Editor]
```