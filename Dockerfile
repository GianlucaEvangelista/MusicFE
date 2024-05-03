# build step
FROM node:latest as build
WORKDIR /app
COPY package.json ./
RUN npm config set strict-ssl false
RUN npm install
COPY . ./
RUN npm run build

# release step
FROM nginx:alpine as release
COPY --from=build /app/build /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]