import { Field, ObjectType} from 'type-graphql';
import { BusArrival } from './bus-arrival.type';

@ObjectType({ description: 'Detalles de la estimación para una parada' })
export class Estimacion {

    @Field({ description: 'Valor hexadecimal del color de la linea' })
    color: string;

    // TODO: Missing field in docs but existing in example
    @Field({ description: 'Número de la línea' })
    line: number;

    @Field({ description: 'Elemento con información sobre el primer bus de la linea que pasa por esa parada' })
    vh_first: BusArrival;

    @Field({ description: 'Elemento con información sobre el segundo bus de la linea que pasa por esa parada' })
    vh_second: BusArrival;

}