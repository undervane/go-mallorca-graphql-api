import { Field, ObjectType, Float } from 'type-graphql';

@ObjectType({ description: 'Coordenadas de la posición del elemento' })
export class Coordinate {

    @Field(type => Float, { description: 'Latitud del elemento' })
    latitud: number;

    @Field(type => Float, { description: 'Longitud del elemento' })
    longitud: number;
}