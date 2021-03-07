
FROM node:14-alpine

WORKDIR /home/back

COPY package*.json ./
COPY yarn.lock ./
COPY tsconfig.json ./
COPY .env ./.env

RUN yarn install

COPY ./data ./data
COPY ./src ./src

RUN yarn build

CMD [ "yarn", "start" ]