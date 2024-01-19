# QikServe

This repository contains my test project proposed to evaluate the frontend challenge.

The demo can be seen at this link: https://qikserve-frontend-challenge.vercel.app/

## Technologies used

React
Typescript
ES6+
React Hooks
Redux

I directly used CRA, I could have used some Vite, Webpack, Parcel, etc, but I wouldn't know if the proposal would have a limitation in this regard.

## Running local

The provided endpoint was unstable due to the usage limit, sometimes it was out of operation, so in the .env setting to "dev" mode the system uses json data locally. I used currency and interface internationalization, based on the configuration that comes from the venue endpoint.

1. Add a .env file following the model proposed in .env.example
2. Fill in the .env with the "dev" or "prod" mode
3. Fill in the .env endpoints for menu and venue data
4. `npm i`
5. `npm start`
6. Open your browser at http://localhost:3000

These are the endpoints provided for the test: Restaurant(https://frontend-challenge.free.beeceptor.com/venue/9) - Menu(https://frontend-challenge.free.beeceptor.com/menu)

## Running test

### Unit Test

I created some component example tests, to run run the command:

`npm test`

### E2E Test

I used Cypress for the test, you can see it in action in this video:

https://youtu.be/RSTJdYsB9jQ

1. Run the project `npm start`
2. Open a new terminal
3. `npm run e2e-test`
4. `npm run e2e-open`

### Requirements

Node.js
