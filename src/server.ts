import "reflect-metadata";
import { AppintmentsResolver } from "./resolvers/appointments-resolver";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import path from "node:path";

async function main() {
  const schema = await buildSchema({
    resolvers: [AppintmentsResolver],
    emitSchemaFile: path.resolve(__dirname, "schema.gql"),
  });
  const server = new ApolloServer({
    schema,
  });

  const { url } = await server.listen();

  console.log(`HTTp server running on ${url}`);
}

main();
