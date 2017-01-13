# Universal Tweed App

This is an example of a universal (initially server rendered) Tweed SPA application.

In `src/routes.js`, URIs are mapped to functions that asynchronously loads pages. It uses
Webpack to split the source code into multiple scripts which is loaded only when they're
needed.

The Tweed Router has implementations both for the server and the browser. In
`src/client/main.js` and `src/server/main.js` respectively, the two routers are loaded,
but they both import the main routes file.

## Running the example

```shell
> git clone https://github.com/tweedjs/tweed-universal-example
> cd tweed-universal
> npm install    # yarn
> npm run build  # yarn build
> npm start      # yarn start
Listening on http://localhost:3000
```
