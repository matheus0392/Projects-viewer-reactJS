FROM node:15.4.0-alpine
RUN mkdir -p mkdir /usr/src/app
VOLUME /usr/src/app
WORKDIR /usr/src/app
EXPOSE 3000
EXPOSE 80