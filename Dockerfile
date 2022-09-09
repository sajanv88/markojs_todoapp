FROM node:16.13.2
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
COPY build ./build

EXPOSE 3000
CMD ["npm", "run", "start"]