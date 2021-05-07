
FROM node:16-alpine

WORKDIR /home/studio

COPY package*.json ./
COPY .env ./.env

RUN npm i -g prisma

COPY ./src/prisma ./src/prisma
COPY ./database ./database

CMD [ "prisma", "studio", "--browser", "none" ]