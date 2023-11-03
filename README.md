# TakeMe

The application contains a Nest API, a React-native front end and a MySQL database.
You will need Docker, Nodejs 16+ (npm), and Pnpm.

## Installation & local run

### Database

> Make sure to have Docker installed & a version of docker compose 2.22 or higher

```bash
# build & run images
$ docker compose up -d
```

### API

> Make sure to have pnpm installed

```bash
# move to the right directory
$ cd packages/api

# install dependencies
$ pnpm install

# run the app (developpment mode)
$ pnpm run dev
```

### Front

```bash
# from the root directory, move to the front
$ cd packages/front

# install dependencies
$ pnpm install

# run the app (developpment mode)
$ pnpm run start
```

## Testing the app

@TODO
