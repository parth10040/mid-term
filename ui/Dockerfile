FROM node:lts-alpine

RUN \
  apk add --update --virtual useradd-dep shadow && \
  groupadd -g 1001 dockeruser && \
  useradd -r -u 1001 -g dockeruser dockeruser && \
  apk del useradd-dep

WORKDIR /app

COPY --chown=dockeruser:dockeruser package*.json ./
COPY --chown=dockeruser:dockeruser . .

RUN \
  npm ci && \
  npm run build

USER dockeruser

EXPOSE 3001
CMD ["npx", "serve", "-l", "3001", "build"]
