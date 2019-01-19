import { Field, ObjectType} from 'type-graphql';
import { Coordinate } from './coordinate.type';
import { TrackStatusEnum } from './enum/status.enum';

@ObjectType({ description: 'Elemento por cada trayecto encontrado' })
export class Trayecto {

    @Field({ description: 'ID del trayecto en concreto' })
    id: number;

    @Field({ description: 'Descripción del trayecto en español' })
    descES: string;

    @Field({ description: 'Descripción del trayecto en inglés' })
    descEN: string;

    @Field({ description: 'Descripción del trayecto en catalán' })
    descCA: string;

    @Field({ description: 'Descripción del trayecto en alemán' })
    descDE: string;

    @Field({ description: 'Tipo del tramo' })
    tipo: string;

    @Field({ description: 'Lista con las coordenadas de cada punto de trayecto. Uniendo los puntos sobre un mapa se conseguirá una ruta' })
    coordenadas: Coordinate[];

    @Field({ description: 'Estado del tramo' })
    estado: TrackStatusEnum;

}