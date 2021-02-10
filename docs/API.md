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
- - [User](#user)
- - - [Registration](#registration)
- - - [Login](#login)

### Introduction
"Dash back" server use GraphQL query language schema.  

By default server listen on: `http://localhost:4000/graphql`  

Examples of request place in Postman_collection files from dir `resources/postman`.
### Schema
GraphQL schema: [../src/graphql/Schema.ts](../src/graphql/Schema.ts)  

Types of schema: [../src/types/graphql/index.d.ts](../src/types/graphql/index.d.ts)

#### Brand
##### Get many brands
```
@param - [void]

@return — [GraphQL.Brand[]]
```
##### Get one brand
```
@param where — [GraphQL.GetOneBrandParams]

@return — [GraphQL.Brand]
```
##### Post one brand
```
@param data — [GraphQL.Brand]

@return — [GraphQL.Brand]
```

##### Update one brand
```
@param where — [GraphQL.GetOneBrandParams]

@param data — [GraphQL.UpdateOneBrandParams]

@return — [GraphQL.Brand]
```
##### Delete one brand
```
@param where — [GraphQL.GetOneBrandParams]

@param data — [GraphQL.UpdateOneBrandParams]

@return - [GraphQL.Brand]
```
### Author
##### Get many authors
```
@param - [void]

@return — [GraphQL.Author[]]
```
##### Get one author
```
@param where — [GraphQL.GetOneAuthorParams]

@return — [GraphQL.Author]
```
##### Post one author
```
@param data — [GraphQL.Author]

@return — [GraphQL.Author]
```

##### Update one author
```
@param where — [GraphQL.GetOneAuthorParams]

@param data — [GraphQL.UpdateOneAuthorParams]

@return — [GraphQL.Author]
```
##### Delete one author
```
@param where — [GraphQL.GetOneAuthorParams]

@param data — [GraphQL.UpdateOneAuthorParams]

@return — [GraphQL.Author]
```
### Editor
##### Get many editors
```
@param - [void]

@return — [GraphQL.Editor[]]
```
##### Get one editor
```
@param where — [GraphQL.GetOneEditorParams]

@return — [GraphQL.Editor]
```
##### Post one editor
```
@param data — [GraphQL.Editor]

@return — [GraphQL.Editor]
```

##### Update one editor
```
@param where — [GraphQL.GetOneEditorParams]

@param data — [GraphQL.UpdateOneEditorParams]

@return — [GraphQL.Editor]
```
##### Delete one editor
```
@param where — [GraphQL.GetOneEditorParams]

@param data — [GraphQL.UpdateOneEditorParams]

@return — [GraphQL.Editor]
```

#### User
##### Registration
```
@param data — [GraphQL.RegistrationParams]

@return — [GraphQL.User]
```
##### Login
```
@param data — [GraphQL.LoginParams]

@return — [GraphQL.User]
```