import { Field, ObjectType} from 'type-graphql';
import { Frecuencia } from './frecuencia.type';
import { Coordinate } from './coordinate.type';

@ObjectType({ description: 'Elemento que incluye información especifica sobre los trayectos de la linea' })
export class TrayectoLinea {

    @Field({ description: 'Clave de la lina a la cual pertenece este trayecto' })
    claveLinea: number;

    @Field({ description: 'Clave o ID de este trayecto' })
    claveTrayecto: number;

    @Field({ description: '-Flag- si este trayecto es principal o no' })
    principal: boolean;

    @Field({ description: 'Nombre del trayecto en español' })
    nombreEs: string;

    @Field({ description: 'Nombre del trayecto en inglés' })
    nombreEn: string;

    @Field({ description: 'Nombre del trayecto en alemán' })
    nombreDe: string;

    @Field({ description: 'Nombre del trayecto en catalán' })
    nombreCt: string;

    @Field({ description: 'Origen del trayecto en español' })
    origenEs: string;

    @Field({ description: 'Origen del trayecto en catalán' })
    origenCt: string;

    @Field({ description: 'Origen del trayecto en inglés' })
    origenEn: string;

    @Field({ description: 'Origen del trayecto en alemán' })
    origenDe: string;

    @Field({ description: 'Destino del trayecto en inglés' })
    destinoEn: string;

    @Field({ description: 'Destino del trayecto en español' })
    destinoEs: string;

    @Field({ description: 'Destino del trayecto en catalán' })
    destinoCt: string;

    @Field({ description: 'Destino del trayecto en alemán' })
    destinoDe: string;

    @Field({ description: 'Elemento con la información sobre esta frecuencia del trayecto' })
    frecuencias: Frecuencia[];

    @Field({ description: 'Lista en orden de las paradas que seguira durante su trayecto de ida, si es circular, sera null' })
    ida: number[];

    @Field({ description: 'Lista en orden de las paradas que seguira durante su trayecto de vuelta, si es circular, sera null' })
    vuelta: number[];

    @Field({ description: 'Lista en orden de las paradas que seguira durante su trayecto circular, si NO es circular, sera null' })
    circular: number[];

    @Field({ description: 'Lista en orden de las paradas que seguira durante su trayecto circular, si NO es circular, sera null' })
    idarecorridoIda: Coordinate[];

    @Field({ description: 'Lista en orden de las paradas que seguira durante su trayecto circular, si NO es circular, sera null' })
    recorridoVuelta: Coordinate[];

    @Field({ description: 'Lista en orden de las paradas que seguira durante su trayecto circular, si NO es circular, sera null' })
    recorridoCircular: Coordinate[];

}