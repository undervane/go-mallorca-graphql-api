import { Field, ObjectType} from 'type-graphql';
import { TrayectoLinea } from './trayecto-linea.type';

@ObjectType({ description: 'Detalles sobre una línea de autobús' })
export class Linea {

    @Field({ description: 'Clave o id de la linea' })
    claveLinea: string;

    @Field({ description: 'Nombre de la linea en español' })
    nombreEs: string;

    @Field({ description: 'Nombre de la linea en catalán' })
    nombreCt: string;

    @Field({ description: 'Nombre de la linea en inglés' })
    nombreEn: string;

    @Field({ description: 'Nombre de la linea en alemán' })
    nombreDe: string;

    @Field({ description: 'Origen de la linea en español' })
    origenEs: string;
    
    @Field({ description: 'Origen de la linea en alemán' })
    origenDe: string;

    @Field({ description: 'Origen de la linea en catalán' })
    origenCt: string;

    @Field({ description: 'Origen de la linea en inglés' })
    origenEn: string;

    @Field({ description: 'Destino de la linea en español' })
    destinoEs: string;

    @Field({ description: 'Destino de la linea en alemán' })
    destinoDe: string;

    @Field({ description: 'Destino de la linea en catalán' })
    destinoCt: string;

    @Field({ description: 'DestIno de la linea en inglés' })
    destinoEn: string;

    @Field({ description: 'Valor hexadecimal del color -fuerte de la linea' })
    colorfuerte: string;

    @Field({ description: 'Valor hexadecimal del color -flojo de la linea' })
    colorflojo: string;

    @Field({ description: 'Velocidad media en KM/h del autobús' })
    velocidad: string;

    @Field({ description: 'Lista de trayectos' })
    trayectos: TrayectoLinea[]
}