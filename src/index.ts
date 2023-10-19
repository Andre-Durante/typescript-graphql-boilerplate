import "reflect-metadata";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { UserResolver } from "./resolvers/UserResolver"; // You'll create this soon!

(async () => {
  const app = express();
  const port = 4000;

  const schema = await buildSchema({
    resolvers: [UserResolver], // Add more resolvers as needed.
    validate: false
  });

  const apolloServer = new ApolloServer({ schema });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app, path: "/graphql" });

  app.listen(port, () => {
    console.log(`🚀 Server started at http://localhost:${port}/graphql`);
  });
})();

