import { Field, ObjectType} from 'type-graphql';
import { Estimacion } from './estimacion.type';

@ObjectType({ description: 'Listado de paradas en forma de mapa indexado por el id de parada' })
export class Parada {

    @Field({ description: 'Latitud de la ubicacion de la parada' })
    0: string;

    @Field({ description: 'Longitud de la ubicacion de la parada' })
    1: string;

    @Field({ description: 'Nombre de la parada' })
    2: string;

    @Field({ description: '-Flag- Si hubo un error con la peticion' })
    error: boolean;

    @Field({ description: 'Mensaje descriptivo del error' })
    errorMessage: string;

    @Field({ description: 'Código del error' })
    errorType: number;

    @Field({ description: 'Fecha absoluta del momento en que se envia la petición' })
    timestamp: number;

    @Field({ description: 'Lista de elementos de parada donde hay información de lineas que pasan por la parada' })
    estimaciones: Estimacion[];

}