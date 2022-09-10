FROM --platform=linux/amd64  node:16.13.2-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
COPY build ./build

EXPOSE 3000
CMD ["npm", "run", "start"]