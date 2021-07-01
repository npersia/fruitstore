# from base image node
#FROM node:8.11-slim
FROM node

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN npm install -g nodemon


RUN npm install -g typeorm
RUN npm install -g reflect-metadata
RUN npm install -g @types/node
RUN npm install -g pg
RUN npm install -g fruitstore_lib
RUN typeorm init

# copying all the files from your file system to container file system
COPY package.json .

# install all dependencies
RUN npm install

# copy oter files as well
COPY ./ .

#expose the port
EXPOSE 3070

# command to run when intantiate an image
CMD ["nodemon","index.js"]
