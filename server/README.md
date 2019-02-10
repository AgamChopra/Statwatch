
## Available Scripts

In the project directory, you can run:

### `yarn build`

Builds the project into the `dist` folder.

### `yarn lint`

Begins linting using [TSLint](https://palantir.github.io/tslint/). The rules being applied are the [airbnb configuration](https://github.com/progre/tslint-config-airbnb) with some slight modifications.


### `yarn dev`

Runs the api in the development mode. This uses `ts-node`.

Use [http://localhost:3000](http://localhost:3000) to test API in browser or Postman.

You will also see any lint errors in the console.

### `yarn start`

Launches the api uses `nodemon` pulling from the `dist` folder.

Use [http://localhost:3000](http://localhost:3000) to test API in browser or Postman.

### `yarn prod`

Runs `build` and `start` for a production api launch.

