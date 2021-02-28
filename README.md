# Backend server

Backed server for Dashboard with `GraphQL` language query and `SQLite` database.

#### Documents
- [API documentation](./docs/API.md)
- [Contributing information](./docs/CONTRIBUTING.md)
- [Changelog](./docs/CHANGELOG.md)

#### Menu
- [Requirements](#requirements)  
- - [System](#system)
- - [Node](#node)
- [Installation](#installation)
- [Usage](#usage)
- - [Development](#development)
- - - [Migration](#migration-on-development)
- - - [Types](#types)
- - - [IDE settings](#ide-settings)
- - - [Debug](#debug)
- - [Production](#production)
- - - [Build and start](#build-and-start)
- - - [Migration](#migration-on-production)
- - - [Test](#test)
- - - [Additions](#additions)
- [Todos](#todos)  

# Package instruction

## Requirements

### System

Development:
```
node v^14.15.4
```

Production:
```
node v^14.15.4
screen v^4.01.00
```

### Node

#### Global packages

Development:
```
yarn v^1.22.10
typescript v^4.1.3
eslint v7^18.0
gulp v^2.3.0
nodemon v^2.0.7
prisma v^2.16.0
```

Production:
```
yarn v^1.22.10
typescript v^4.1.3
prisma v^2.16.0
```

## Installation

```
git clone https://github.com/atherdon/dash-back
cd dash-back
yarn install
```
Rename [.env.example](./.env.example) to `.env` and set up your environment variables:
```ini
# 1 For Linux Database url (need change ${absPathToPWD} to /abs/path/to/project)
# 2 For Windows (file:./database/sqlite/dash.db)
DATABASE_URL=file://${absPathToPWD}/database/sqlite/dash.db
# List of allowed origins, in NODE_ENV !== production that origin is '*' everytime
CORS_ORIGIN=localhost,second.origin
# JWT token secret key
TOKEN_KEY=QpLwz7AqqUg0GU6VHLO31aR8zqoeMiJiYXIiLCJpY
```

## Usage

### Development

Start watch ts changes:
```
yarn ts
```

Start server:
```
yarn dev
```

#### Migration on development

Database migrations: [src/prisma/migrations](./src/prisma/migrations)  
Database schema: [src/prisma/schema.prisma](./src/prisma/schema.prisma)

Create new migration.
__This command delete all data from database__:
```
yarn migrate:dev
```


Only delete data from database without create migration:
```
yarn migrate:reset
```

Get status of migrations:
```
yarn migrate:status
```

#### Types


| GraphQL types |
|--|
Types for GraphQL Schema created automatically with package `@graphql-codegen`. When changed src/graphql/Schema.ts. To create types into src/types/graphql/index.d.ts run `yarn codegen` or simple run `gulp` and generated file will be changed everytime when `Schema.ts` saved. |

#### IDE settings

Local settings for `vscode` in [.vscode/settings.json](./.vscode/settings.json)`

For highlight specified syntax need install vscode extensions:
```
dbaeumer.vscode-eslint
graphql.vscode-graphql
esbenp.prettier-vscode
prisma/prisma
```
#### Debug
To run server in debug console need set up file [.vscode/launch.json](./.vscode/launch.json)
```json
"runtimeExecutable": "~/.nvm/versions/node/v14.15.4/bin/node"
```
And run debug `F5`

### Production 

| Attention! |
|--|
Only `Linux` based OS support |

#### Build and start

Build typescript:
```
yarn build
```

Run server in `screen`:
```
yarn prod
```

| Or |
|--|
Run build and prod commands: `yarn deploy` |

#### Migration on production

Create database schemas from exists migrations:
```
yarn migrate
```

#### Test

File 'postman.json' in [resources/postman](./resources/postman)

Start without `screen` in development mode:
```
yarn start
```

Start with environment variable NODE_ENV=test (in this case in result of requests added variable 'stdErrMessage'):
```
yarn prod:test
```
_Before this command do not forgot_ `yarn build`

#### Additions

Open database explorer
```
yarn studio
```

Show actual log (production):
```
yarn logs
```

Focus `screen` (production):
```
yarn focus
``` 
Start `fill` scripts
```
yarn script fill
```

# TODOS


- auth0 as simple and lazy way to do a login
- quick and simple deploys from pull requests(aws?)


front located here: https://github.com/atherdon/dashb

---

examples with data(durty version):  https://github.com/atherdon/dash-back/data


- stage 0: simple crud on graphql. we can use sqllite for speed
- stage 1:  authentification: to be discussed - simple for 10 ppl or BRAC with 2-3 roles
- stage 2: csv/json import script
- stage 3: simple additional functionality: search/filtration/basic calculations
