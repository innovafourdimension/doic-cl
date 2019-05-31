FROM node:11
ENV NODE_ENV development
ENV COMUNICATION_LAYER "amqp://localhost"


WORKDIR /usr/src/app
COPY package*.json ./
# Install nodemon
RUN npm i -g nodemon
RUN npm install
COPY . .

EXPOSE 4001 9201
CMD ["npm", "run", "start:dev"]