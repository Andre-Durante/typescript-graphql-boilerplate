# TypeScript GraphQL Boilerplate

This is a simple boilerplate project to get you started with building GraphQL APIs using TypeScript and TypeGraphQL.

## Features

TypeScript for strong type safety.
GraphQL for querying your API.
TypeGraphQL for defining GraphQL schema using classes and decorators.
Apollo Server for serving your GraphQL schema.

## Prerequisites

Before getting started, ensure you have the following prerequisites installed:

Node.js
NPM

## Installation

`npm install`

## Building

`npm run build`

## Start and testing

You will need to run `npm start` and with the server running you can run `npm test`

## Usage

If you want to use the UI you can just run `npm start` go to http://localhost:4000/graphql and you the following example query

```
query {
  user(id: 1) {
    id
    name
    email
  }
}

```

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.
