import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import * as path from "path";

async function bootstrap() {
    // build TypeGraphQL executable schema
    const schema = await buildSchema({
        resolvers: [],
        // automatically create `schema.gql` file with schema definition in current folder
        emitSchemaFile: path.resolve(__dirname, "schema.gql"),
    });

    // Create GraphQL server
    const server = new ApolloServer({
        schema,
        // enable GraphQL Playground
        playground: true,
    });

    // Start the server
    const { url } = await server.listen(4000);
    console.log(`Server is running, GraphQL Playground available at ${url}`);
}

bootstrap();