FROM node:16-alpine3.15 AS build
WORKDIR /app
COPY . .
RUN npm install && npm run build

EXPOSE 3000
CMD ["npm", "start"]