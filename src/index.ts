import 'reflect-metadata';
import * as path from 'path';
import { Container } from "typedi";
import { ApolloServer } from 'apollo-server';
import { buildSchema, useContainer } from 'type-graphql';
import { EstacionResolver } from './resolvers/estacion.resolver';
import { AparcamientoResolver } from './resolvers/aparcamiento.resolver';
import { CamaraResolver } from './resolvers/camara.resolver';
import { ParadaResolver } from './resolvers/parada.resolver';
import { TrayectoResolver } from './resolvers/trayecto.resolver';
import { LineaResolver } from './resolvers/linea.resolver';

async function bootstrap() {

    // Configure dependecy injection
    useContainer(Container)

    // build TypeGraphQL executable schema
    const schema = await buildSchema({
        resolvers: [
            EstacionResolver,
            AparcamientoResolver,
            CamaraResolver,
            ParadaResolver,
            TrayectoResolver,
            LineaResolver
        ],
        // automatically create `schema.gql` file with schema definition in current folder
        emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
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