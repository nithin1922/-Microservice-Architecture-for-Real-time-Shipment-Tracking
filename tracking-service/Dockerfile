# tracking-service/Dockerfile
FROM node:16-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Although this service doesn't expose an HTTP port, we include it for consistency.
EXPOSE 3001
CMD ["node", "app.js"]
