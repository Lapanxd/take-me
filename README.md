# TakeMe

The application contains a Nest API, a React-native front end and a MySQL database.
You will need Docker, Nodejs 16+ (npm), and Pnpm.

## Installation

### Database

> Make sure to have Docker installed & a version of docker compose 2.22 or higher

```bash
# build & run images
$ docker compose up -d
```

### API

> Make sure to have pnpm installed

```bash

$ cd packages/api
# install dependencies
$ pnpm install
```

### Front

```bash
# from the root directory, move to the front
$ cd takeMe-Front
# install dependencies
$ npm install
```

## Running the app

### Front

```bash
$ cd takeMe-Front
$ npm run expo:start
```

### API

```bash
$ cd packages/api
$ pnpm run start
```

## Testing the app

@TODO
