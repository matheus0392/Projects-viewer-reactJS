FROM node:15.4.0-alpine
RUN apk add --update python2
RUN apk add --update alpine-sdk
RUN mkdir -p mkdir /usr/src/app
VOLUME /usr/src/app
WORKDIR /usr/src/app
EXPOSE 3000
EXPOSE 80
