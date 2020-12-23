FROM node:alpine

WORKDIR /app

#	ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app

RUN yarn install

COPY . /app

CMD ["yarn", "run", "start"]


