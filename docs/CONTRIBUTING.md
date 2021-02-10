# Contributing information

#### Documents
- [Package instruction](../README.md)
- [API documentation](./API.md)
- [Changelog](./CHANGELOG.md)

#### Menu
- [Architecture](#architecture)
- - [Server runtime](#server-runtime)
- [GraphQL](#graphql)
- - [Schema](#schema-graphql)
- - [Resolvers](#resolvers)
- - - [Add resolvers namespace](#add-resolvers-namespace)
- - - [Add new resolver](#add-new-resolver)
- - [Types](#types-graphql)
- [Database](#database)
- - [Schema](#schema-prisma)
- - [Orm](#orm)
- - [Types](#types-prisma)
- [Global types](#types)
- [Library](#library)
- [Data](#data)
- [Important](#important)

## Architecture
Projects settings: [.env](../.env)
### Server runtime
Apollo GraphQL server [src/index.ts](../src/index.ts)
### GraphQL
#### Schema graphql
GraphQL schema file [src/graphql/Schema.ts](../src/graphql/Schema.ts)
#### Resolvers
GraphQL requests resolvers placed in directory [graphql/resolvers](../src/graphql/resolvers).  
Index file [graphql/resolvers/index.ts](../src/graphql/resolvers/index.ts) exported all namespaces of resolvers.  
Resolvers code placed in subdirectories. 
Each subdirectory have index file which exported all self resolvers. 
#### Add resolvers namespace
1. Create directory with new namespace name in [graphql/resolvers](../src/graphql/resolvers).
2. Create index file in namespace directory.
3. Import * as namespace in file [graphql/resolvers/index.ts](../src/graphql/resolvers/index.ts)
### Add new resolver
1. Create a file in target subdirectory with one of enum names  `[postOne, postMany, getOne, getMany, updateOne, updateMany, deleteOne, deleteMany, *.ts]` it rule is not required, but in the future, it will make it easier to understand the structure of the project.
2. Get example code from one of old Resolver file, create new resolver. Make target Resolver name, for example in file `user/postOne` use `postOneUser` method name for fast understanding.
3. Export new Resolver from resolver subdirectory index file. 
4. Create GraphQl Schema in [graphql/Schema.ts](../src/graphql/Schema.ts) (add `query` or `mutation` type). Name of resolver field need will be identity with resolver method name (optional). Do not forget check or add optional method type in type Response (`# Fields of custom objects`)! Property prefix with `*s` at the end if need return a list of existed type.
5. Import and add the Resolver in [graphql/Resolvers.ts](../src/graphql/Resolver.ts).
6. Change Resolver file with custom Schema types. 
7. Create request in `Postman.json` collection and test Resolver.
8. Add anotation in source and API documentation in [docs/API.md](./API.md).
#### Types graphql
Types of graphq schema created automatically with `codegen` library, there is the `gulp` task.
## Database
### Schema Prisma
1. Create Prisma Schema in [prisma/schema.prisma](../src/prisma/schema.prisma)
2. Make migration
```
yarn migrate:dev
```
#### Orm
Prisma is very easy to use. Just import `PrismaClient` from the `prisma` library. We create an object `prisma` (preferably outside the request processing method). Also from the library we import the type of the circuit created in [Schema](#schema-prisma). Next, we use Prisma API for database queries.
Example: 
```typescript
import { PrismaClient, Brand } from '@prisma/client';

const prisma = new PrismaClient();

const result = await prisma.brand.create({
    data: {
      email,
      url,
    },
  });
```
#### Types prisma
Exported from `@prisma/client`
## Types
Global types [src/types/index.d.ts](../src/types/index.d.ts)
## Library
Project library [src/lib/index.ts](../src/lib/index.ts)
## Data
Data files [data](./data)
## Important
### Possible errors
If not added the resolver:
```
Cannot return null for non-nullable field Mutation.postOneEditor
```
No changed namespace in [graphql/Resolvers.ts](../src/graphql/Resolver.ts):
```
Invalid `prisma.author.create()` invocation:\n\n{\n  data:
```
