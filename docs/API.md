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
- - [Country](#country)
- - - [Get many](#get-many-countries)
- - - [Get one](#get-one-country)
- - - [Post one](#post-one-country)
- - - [Update one](#update-one-country)
- - - [Delete one](#delete-one-country)
- - [Device](#device)
- - - [Get many](#get-many-devices)
- - - [Get one](#get-one-device)
- - - [Post one](#post-one-device)
- - - [Update one](#update-one-device)
- - - [Delete one](#delete-one-device)
- - [Page](#page)
- - - [Get many](#get-many-pages)
- - - [Get one](#get-one-page)
- - - [Post one](#post-one-page)
- - - [Update one](#update-one-page)
- - - [Delete one](#delete-one-page)
- - [Query](#query)
- - - [Get many](#get-many-queries)
- - - [Get one](#get-one-query)
- - - [Post one](#post-one-query)
- - - [Update one](#update-one-query)
- - - [Delete one](#delete-one-query)
- - [Tag](#tag)
- - - [Get many](#get-many-tags)
- - - [Get one](#get-one-tag)
- - - [Post one](#post-one-tag)
- - - [Update one](#update-one-tag)
- - - [Delete one](#delete-one-tag)
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
@param - [GraphQL.GetManyArticleParams]

@return — [GraphQL.ArticleMany]
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

### Country
##### Get many countries
```
@param - [void]

@return — [GraphQL.Country[]]
```
##### Get one country
```
@param where — [GraphQL.GetOneCountryParams]

@return — [GraphQL.Country]
```
##### Post one country
```
@param data — [GraphQL.PostOneCountryParams]

@return — [GraphQL.Country]
```

##### Update one country
```
@param where — [GraphQL.GetOneCountryParams]

@param data — [GraphQL.UpdateOneCountryParams]

@return — [GraphQL.Country]
```
##### Delete one country
```
@param where — [GraphQL.GetOneCountryParams]

@return — [GraphQL.Country]
```

### Device
##### Get many devices
```
@param - [void]

@return — [GraphQL.Device[]]
```
##### Get one device
```
@param where — [GraphQL.GetOneDeviceParams]

@return — [GraphQL.Device]
```
##### Post one device
```
@param data — [GraphQL.PostOneDeviceParams]

@return — [GraphQL.Device]
```

##### Update one device
```
@param where — [GraphQL.GetOneDeviceParams]

@param data — [GraphQL.UpdateOneDeviceParams]

@return — [GraphQL.Device]
```
##### Delete one device
```
@param where — [GraphQL.GetOneDeviceParams]

@return — [GraphQL.Device]
```

### Page
##### Get many pages
```
@param - [void]

@return — [GraphQL.Page[]]
```
##### Get one page
```
@param where — [GraphQL.GetOnePageParams]

@return — [GraphQL.Page]
```
##### Post one page
```
@param data — [GraphQL.PostOnePageParams]

@return — [GraphQL.Page]
```

##### Update one page
```
@param where — [GraphQL.GetOnePageParams]

@param data — [GraphQL.UpdateOnePageParams]

@return — [GraphQL.Page]
```
##### Delete one page
```
@param where — [GraphQL.GetOnePageParams]

@return — [GraphQL.Page]
```

### Query
##### Get many queries
```
@param - [void]

@return — [GraphQL.QueryS[]]
```
##### Get one query
```
@param where — [GraphQL.GetOneQuerySParams]

@return — [GraphQL.QueryS]
```
##### Post one query
```
@param data — [GraphQL.PostOneQuerySParams]

@return — [GraphQL.QueryS]
```

##### Update one query
```
@param where — [GraphQL.GetOneQuerySParams]

@param data — [GraphQL.UpdateOneQuerySParams]

@return — [GraphQL.QueryS]
```
##### Delete one query
```
@param where — [GraphQL.GetOneQuerySParams]

@return — [GraphQL.QueryS]
```

### Tag
##### Get many tag
```
@param - [void]

@return — [GraphQL.Tag[]]
```
##### Get one tag
```
@param where — [GraphQL.GetOneTagParams]

@return — [GraphQL.Tag]
```
##### Post one tag
```
@param data — [GraphQL.PostOneTagParams]

@return — [GraphQL.Tag]
```

##### Update one tag
```
@param where — [GraphQL.GetOneTagParams]

@param data — [GraphQL.UpdateOneTagParams]

@return — [GraphQL.Tag]
```
##### Delete one tag
```
@param where — [GraphQL.GetOneTagParams]

@return — [GraphQL.Tag]
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