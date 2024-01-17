# QikServe

This repository contains my test project proposed to evaluate the frontend challenge

## Technologies used

React
Typescript
ES6+
React Hooks
Redux

I directly used CRA, I could have used some Vite, Webpack, Parcel, etc, but I wouldn't know if the proposal would have a limitation in this regard.

## Running local

The provided endpoint was unstable due to the usage limit, sometimes it was out of operation, so in the .env setting to "dev" mode the system uses json data locally

1. Add a .env file following the model proposed in .env.example
2. Fill in the .env with the "dev" or "prod" mode
3. Fill in the .env endpoints for menu and venue data
4. `npm i`
5. `npm start`
6. Open your browser at http://localhost:3000

## Running test

I created some component example tests, to run run the command:
`npm test`

### Requirements

Node.js
