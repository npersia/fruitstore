FROM node:current-alpine3.11
RUN npm install -g nodemon
RUN mkdir -p /app/config /app/src
WORKDIR /app
ADD ./ /app/
EXPOSE 8080
RUN npm install
CMD ["nodemon","index.js"]
