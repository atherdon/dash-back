# Changelog

#### Documents
- [Package instruction](../README.md)
- [API documentation](./API.md)
- [Contributing information](./CONTRIBUTING.md)

## Changes by version 

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