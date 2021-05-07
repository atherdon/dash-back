
FROM node:16-alpine

WORKDIR /home/forms
ARG USER=atherdon
ARG REPO=dash-upload-forms
ARG BRANCH=main
RUN apk --no-cache add git
ADD https://api.github.com/repos/$USER/$REPO/git/refs/heads/$BRANCH ../version.json
RUN git clone -b $BRANCH https://github.com/$USER/$REPO.git .
COPY .env ./.env
RUN yarn install 
RUN echo REACT_APP_SERVER_URL=$(grep -v '^#' .env | grep -e 'DOCKER_SERVER_URL' | sed -e 's/^\w*=//') > .env.production
RUN yarn build

CMD [ "yarn", "start" ]