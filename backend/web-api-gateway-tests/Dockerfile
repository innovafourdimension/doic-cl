FROM node:11

RUN npm install -g nodemon
RUN npm config set registry https://registry.npmjs.org
COPY package.json /usr/src/app/package.json
RUN npm install \
    && npm ls \
    && npm cache clean --force \
    && mv /usr/src/app/node_modules /node_modules
COPY . /usr/src/app

EXPOSE 4000 9200
CMD ["npm", "run", "start:dev"]