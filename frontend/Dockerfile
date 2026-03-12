FROM node:20-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
# Let the official nginx entrypoint render templates from environment variables.
COPY nginx.conf.template /etc/nginx/templates/default.conf.template
EXPOSE 80
