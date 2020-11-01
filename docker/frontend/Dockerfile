FROM node:12.18.3 as builder
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
RUN npm run builder

fROM 
