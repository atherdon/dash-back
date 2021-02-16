# API documentation

#### Documents
- [Package instruction](../README.md)
- [Contributing information](./CONTRIBUTING.md)
- [Changelog](./CHANGELOG.md)

#### Menu
- [Introduction](#introduction)
- [Schema](#schema)
- - [Article](#article)
- - - [Get one](#get-one-article)
- - - [Get many](#get-many-articles)
- - - [Post one](#post-one-article)
- - - [Update one](#update-one-article)
- - - [Delete one](#delete-one-article)
- - [Brand](#brand)
- - - [Get one](#get-one-brand)
- - - [Get many](#get-many-brands)
- - - [Post one](#post-one-brand)
- - - [Update one](#update-one-brand)
- - - [Delete one](#delete-one-brand)
- - [Top author](#top-author)
- - - [Get one](#get-one-top-author)
- - - [Get many](#get-many-top-authors)
- - - [Post one](#post-one-top-author)
- - - [Update one](#update-one-top-author)
- - - [Delete one](#delete-one-top-author)
- - [Editor](#editor)
- - - [Get one](#get-one-editor)
- - - [Get many](#get-many-editors)
- - - [Post one](#post-one-editor)
- - - [Update one](#update-one-editor)
- - - [Delete one](#delete-one-editor)
- - [Expandable](#expandable)
- - - [Get one](#get-one-expandable)
- - - [Get many](#get-many-expandables)
- - - [Post one](#post-one-expandable)
- - - [Update one](#update-one-expandable)
- - - [Delete one](#delete-one-expandable)
- - [Filter](#filter)
- - - [Get one](#get-one-filter)
- - - [Get many](#get-many-filters)
- - - [Post one](#post-one-filter)
- - - [Update one](#update-one-filter)
- - - [Delete one](#delete-one-filter)
- - [Appearance](#appearance)
- - - [Get one](#get-one-appearance)
- - - [Get many](#get-many-appearances)
- - - [Post one](#post-one-appearance)
- - - [Update one](#update-one-appearance)
- - - [Delete one](#delete-one-appearance)
- - [User](#user)
- - - [Registration](#registration)
- - - [Login](#login)
- - - [Get one](#get-one-user)
- - - [Update one](#update-one-user)
- - - [Delete one](#delete-one-user)

### Introduction
"Dash back" server use GraphQL query language schema.  

By default server listen on: `http://localhost:4000/graphql`  

Examples of request place in Postman_collection files from dir `resources/postman`.
### Schema
GraphQL schema: [../src/graphql/Schema.ts](../src/graphql/Schema.ts)  

Types of schema: [../src/types/graphql/index.d.ts](../src/types/graphql/index.d.ts)

#### Article
##### Get many articles
```
@param - [void]

@return — [GraphQL.Article[]]
```
##### Get one article
```
@param where — [GraphQL.GetOneArticleParams]

@return — [GraphQL.Article]
```
##### Post one article
```
@param data — [GraphQL.PostOneArticleParams]

@return — [GraphQL.Article]
```

##### Update one article
```
@param where — [GraphQL.GetOneArticleParams]

@param data — [GraphQL.UpdateOneArticleParams]

@return — [GraphQL.Article]
```
##### Delete one article
```
@param where — [GraphQL.GetOneArticleParams]

@return - [GraphQL.Article]
```
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
@param data — [GraphQL.PostOneBrandParams]

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

@return - [GraphQL.Brand]
```
### Author
##### Get many top authors
```
@param - [void]

@return — [GraphQL.TopAuthor[]]
```
##### Get one top author
```
@param where — [GraphQL.GetOneTopAuthorParams]

@return — [GraphQL.TopAuthor]
```
##### Post one top author
```
@param data — [GraphQL.PostOneTopAuthorParams]

@return — [GraphQL.TopAuthor]
```

##### Update one top author
```
@param where — [GraphQL.GetOneTopAuthorParams]

@param data — [GraphQL.UpdateOneTopAuthorParams]

@return — [GraphQL.TopAuthor]
```
##### Delete one top author
```
@param where — [GraphQL.GetOneTopAuthorParams]

@return — [GraphQL.TopAuthor]
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
@param data — [GraphQL.PostOneEditorParams]

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

@return — [GraphQL.Editor]
```

### Expandable
##### Get many expandables
```
@param - [void]

@return — [GraphQL.Expandable[]]
```
##### Get one expandable
```
@param where — [GraphQL.GetOneExpandableParams]

@return — [GraphQL.Expandable]
```
##### Post one expandable
```
@param data — [GraphQL.PostOneExpandableParams]

@return — [GraphQL.Expandable]
```

##### Update one expandable
```
@param where — [GraphQL.GetOneExpandableParams]

@param data — [GraphQL.UpdateOneExpandableParams]

@return — [GraphQL.Expandable]
```
##### Delete one expandable
```
@param where — [GraphQL.GetOneExpandableParams]

@return — [GraphQL.Expandable]
```

### Filter
##### Get many filters
```
@param - [void]

@return — [GraphQL.Filter[]]
```
##### Get one filter
```
@param where — [GraphQL.GetOneFilterParams]

@return — [GraphQL.Filter]
```
##### Post one filter
```
@param data — [GraphQL.PostOneFilterParams]

@return — [GraphQL.Filter]
```

##### Update one filter
```
@param where — [GraphQL.GetOneFilterParams]

@param data — [GraphQL.UpdateOneFilterParams]

@return — [GraphQL.Filter]
```
##### Delete one filter
```
@param where — [GraphQL.GetOneFilterParams]

@return — [GraphQL.Filter]
```

### Appearance
##### Get many appearances
```
@param - [void]

@return — [GraphQL.Appearance[]]
```
##### Get one appearance
```
@param where — [GraphQL.GetOneAppearanceParams]

@return — [GraphQL.Appearance]
```
##### Post one appearance
```
@param data — [GraphQL.PostOneAppearanceParams]

@return — [GraphQL.Appearance]
```

##### Update one appearance
```
@param where — [GraphQL.GetOneAppearanceParams]

@param data — [GraphQL.UpdateOneAppearanceParams]

@return — [GraphQL.Appearance]
```
##### Delete one appearance
```
@param where — [GraphQL.GetOneAppearanceParams]

@return — [GraphQL.Appearance]
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
##### Get one user
```
Authorization: true

@param where — [GraphQL.GetOneUserParams]

@return — [GraphQL.User]
```
##### Update one user
```
Authorization: true;

@param where — [GraphQL.GetOneUserParams]

@param data — [GraphQL.UpdateOneUserParams]

@return — [GraphQL.User]
```
##### Delete one user
```
Authorization: true;

@param where — [GraphQL.GetOneUserParams]

@return — [GraphQL.User]
```