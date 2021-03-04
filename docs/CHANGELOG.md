# Changelog

#### Documents
- [Package instruction](../README.md)
- [API documentation](./API.md)
- [Contributing information](./CONTRIBUTING.md)

## Changes by version   
- ### version 5.1.3-4.03.2021
1. Make `edited` and `published` as optional in `postOneArticle`
2. Fixed chenge `ready` bug in `updateUneArticle`
- ### version 5.1.2-3.03.2021
1. Added `GraphQLDateTime` type from `graphql-iso-date` library
- ### version 5.1.1-3.03.2021
1. Fixed Prisma format bug
2. Added `top-authors.json` to `yarn srcipt fill`
- ### version 5.1.0-3.03.2021
1. Fixed pagination bug in `Article`
2. Added CRUD for relation scheme `ArticleTab`
3. Changed field `v:string` to `ready:boolean` in `Article`
4. Make `ready` and `isPublish` are optional while create `Article` (default `false`)
5. Added `tags` to all article results `Article` and `ArticleTag` 
6. Added `type` filter to `ArticleTag` 'getMany' 
- ### version 5.0.0-2.03.2021
1. Deleted `article` clons
2. Added type column to `article`
3. Changed `article` types: avgTimeStory, avgAllTimesStory, isPublished, edited, added, published, to normalized types.
4. Added article filters: `type`, `isPublished`
5. Added `article` getMany pagination
6. Sync fill script with new `article` schema from `data/brands.json`
- ### version 4.1.0-26.02.2021
1. Changed returned types of `Article`, `Evergreen` and `TopAuthor` use `NameMany` instead `Name[]` see [API.md](./API.md)
2. Added CRUD `Edited`
- ### version 4.0.4-24.02.2021
1. Rename `Brand` to `Evergreen`
2. Change `Expandable` schema  
- ### version 4.0.3-17.02.2021
1. Added CRUD `Country`
2. Added CRUD `Device`
3. Added CRUD `QueryS`
4. Added CRUD `Tag`
5. Added fill scripts for all CRUDs
- ### version 4.0.0-16.02.2021
1. Renamed schema `Autor` into `TopAuthor`
2. Added CRUD `Article`
3. Added CRUD `Expandable`
4. Changed schema types for `Brand` and `TopAuthor` 
5. Added CRUD `Appearance`
6. Added CRUD `Filter`
7. Added scripts to fill data from data directory for existed CRUDs
- ### version 3.3.2-12.02.2021
Fixed deploy bug with `prisma generate`
- ### version 3.3.1-12.02.2021
Fixed `CORS` bug
Added returned value`roleName` in `User` type see: [User roles](./CONTRIBUTING.md#user-roles)

- ### version 3.3.0-11.02.2021

Added authentification middleware hook [middlewares/hooks/withAuth.ts](../src/middlewares/hooks/withAuth.ts) 

- ### version 3.2.0-10.02.2021

Added Registration and Login routes

Changed one error type:
```typescript
export type Status = 'error' | 'warning';

export type ErrorsItem = {
  code: number;
  status: Result;
  message: string;
  stdErrMessage: string;
};

export type Errors = {
  errors: ErrorsItem[];
};
```
TODO:
Added authorization middleware. But due to limitations `GraphQL`, it was not possible to fully implement it, so it needs to be redone. 

- ### version 3.1.1-10.02.2021

Renamed `src/graphql/Resolvers.ts` to `src/graphql/Resolver.ts`

- ### version 3.1.0-09.02.2021

Removed catching errors of `prisma` from all resolvers

- ### version 3.0.0-08.02.2021

Removed type `Response` from handle all requests.

- ### version 2.0.0-07.02.2021

The `checkGraphQLParams` middleware was removed from the project because it was not suitable for handling nested types. Its completion under the current project was not justified for financial reasons. However, if its relevance is studied and proven, it will be possible to write an open source library in the future.

- ### version 1.0.0-06.02.2021

### #Code review request:

Added express middleware [src/middlewares/checkGraphQLParams.ts](https://github.com/atherdon/dash-back/blob/861223748fcf0d967fc1d0eee32aa117148c5abf/src/middlewares/checkGraphQLParams.ts) which check all request parameters, compare their with GraphQL Schema and if error return formatted error.
If is use standart GraphQL error formatter, then on error in development mode will be:
```json
{
    "errors": [
        {
            "status": "error",
            "message": "Something went wrong",
            "stdErrMessage": "Variable \"$brand\" got invalid value 2 at \"brand.email\"; String cannot represent a non string value: 2"
        }
    ]
}
```
And with this middleware wrong parameter errors will be:
```json
{
    "data": {
        "postBrand": {
            "status": "error",
            "message": "Type of 'email' are not valid",
            "wrongParameter": {
                "name": "email",
                "required": "string",
                "received": "number"
            }
        }
    }
}
```
__And it is standart `Response` type of package.__

By keeping all types of server responses to the same standard, it will be much easier for front-end developers to anticipate unexpected user input. But on the other hand, this approach is not standard for the apollo-server-express library, and therefore requires increased attention. 