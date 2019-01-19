import { Field, ObjectType} from 'type-graphql';

@ObjectType({ description: 'Información sobre la llegada un autobús a la parada' })
export class BusArrival {

    @Field({ description: 'Nombre del destino del bus (dirección)' })
    destino: string;

    @Field({ description: 'Segundos que tardara el bus en pasar por la parada' })
    seconds: number;

    @Field({ description: '-Flag- Si el bus esta parado en la parada' })
    enParada: boolean;

    @Field({ description: '-Flag- Si el bus esta llegando o a punto de llegar' })
    llegando: boolean;

}