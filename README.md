# Backend server

Backed server for Dashboard with `GraphQL` language query and `SQLite` database.

#### Extern links  
[types](#types)

# Usage instruction

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
Rename `.env.example` to `.env`
Set up yourself environment variables:
```ini
DATABASE_URL=file://${absPathToPWD}/database/sqlite/dash.db
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

##### Types


| GraphQL types |
|--|
Types for GraphQL Schema created automatically with package `@graphql-codegen`. When changed src/graphql/Schema.ts. To create types into src/types/graphql/index.d.ts run `yarn codegen` or simple run `gulp` and generated file will be changed everytime when `Schema.ts` saved. |

#### Highlight syntax

For highlight specified syntax need install vscode extensions:
```
dbaeumer.vscode-eslint
graphql.vscode-graphql
esbenp.prettier-vscode
prisma/prisma
```

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

#### Additions

Show actual log:
```
yarn logs
```

Focus `screen`:
```
yarn focus
``` 

# TODOS


- basic backend server
- data import script
- auth0 as simple and lazy way to do a login
- quick and simple deploys from pull requests(aws?)


front located here: https://github.com/atherdon/dashb

---

examples with data(durty version):  https://github.com/atherdon/dash-back


- stage 0: simple crud on graphql. we can use sqllite for speed
- stage 1:  authentification: to be discussed - simple for 10 ppl or BRAC with 2-3 roles
- stage 2: csv/json import script
- stage 3: simple additional functionality: search/filtration/basic calculations

where to deploy quick previews?