import { Field, ObjectType} from 'type-graphql';

@ObjectType({ description: 'Coordenadas de la posición del elemento' })
export class Coordinate {

    @Field({ description: 'Latitud del elemento' })
    0: number;

    @Field({ description: 'Longitud del elemento' })
    1: number;
}