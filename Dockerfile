FROM node:16-alpine

USER root

RUN apk update

ENV PORT=5000

EXPOSE 5000

WORKDIR /app

COPY ["package.json", "yarn.lock"]

RUN yarn

COPY . .

CMD ["yarn", "dev"]