# Project: Dad-Joke-App

## Getting Started
---
### Prerequisite
---

This project will require you to have NodeJs, NPM, and Docker installed.
Please refer to the [README](../README.md) in the project root.

### Development
---
#### Install
Running this command will install all the dependencies for the app project.

```bash
npm install
```

#### Start Development Server
Running this command will start the development server.

```bash
npm start
```

#### Build
Running this command will build the project.

```bash
npm run build
```

### Using Dockerfile
___
#### Build the Image
This command has to be ran from within the backend directory.

```bash
docker build --tag dadjokeapp .
```

#### Build the Container
This command will build and run the container in detached mode.  You will be able to hit the container on port 3000.

```bash
docker run -d --name dadjokeapp -p 3000:3000 dadjokeapp
```

#### Removing the Container
This command will kill the running container and remove it.

```bash
docker rm -f dadjokeapp
```
