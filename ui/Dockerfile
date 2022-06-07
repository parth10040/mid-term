FROM node:lts-alpine

WORKDIR /app

COPY  package*.json ./
COPY  . .

RUN \
  npm ci && \
  npm run build

EXPOSE 3001
CMD ["npx", "serve", "-l", "3001", "build"]
