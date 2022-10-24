# stage 1

FROM node:18-alpine AS build

WORKDIR /angular

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

# stage 2

FROM nginx:alpine

COPY --from=build /angular/dist/ /usr/share/nginx/html