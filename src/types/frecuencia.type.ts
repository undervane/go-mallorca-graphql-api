import { Field, ObjectType } from 'type-graphql';

@ObjectType({ description: 'Detalles sobre una frecuencia de trayecto' })
export class Frecuencia {

    @Field({ description: 'Tiempo en minutos de la frecuencia en que pasa un bus en este trayecto por las mañanas' })
    manana: number;

    @Field({ description: 'Tiempo en minutos de la frecuencia en que pasa un bus en este trayecto por las tardes' })
    tardes: number;

    @Field({ description: 'Nombre de la frecuencia en español' })
    nombreEs: string;

    @Field({ description: 'Nombre de la frecuencia en catalán' })
    nombreCt: string;

    @Field({ description: 'Nombre de la frecuencia en alemán' })
    nombreDe: string;

    @Field({ description: 'Nombre de la frecuencia en inglés' })
    nombreEn: string;

    @Field({ description: 'Cadena de texto que indica las horas de las primeras salidas (desde la primera parada)' })
    primerasSalidas: string;

    @Field({ description: 'Cadena de texto que indica las horas de las ultimas salidas (desde la primera parada)' })
    ultimasSalidas: string;

    @Field({ description: 'Cadena de texto que indica las horas de la vuelta de las primeras salidas (ultima parada)' })
    primerasSalidasVuelta: string;

    @Field({ description: 'Cadena de texto que indica las horas de la vuelta de las ultimas salidas (ultima parada)' })
    ultimasSalidasVuelta: string;

    @Field({ description: '-Flag- Si esta frecuencia esta activa los lunes' })
    servicioL: boolean;

    @Field({ description: '-Flag- Si esta frecuencia esta activa los martes' })
    servicioM: boolean;

    @Field({ description: '-Flag- Si esta frecuencia esta activa los miércoles' })
    servicioX: boolean;

    @Field({ description: '-Flag- Si esta frecuencia esta activa los jueves' })
    servicioJ: boolean;

    @Field({ description: '-Flag- Si esta frecuencia esta activa los viernes' })
    servicioV: boolean;

    @Field({ description: '-Flag- Si esta frecuencia esta activa los sábados' })
    servicioS: boolean;

    @Field({ description: '-Flag- Si esta frecuencia esta activa los domingos' })
    servicioD: boolean;

    @Field({ description: '-Flag- Si esta frecuencia esta activa los dias festivos' })
    servicioF: boolean;

    @Field({ description: '-Flag- Si esta frecuencia esta activa las visperas de festivos' })
    servicioVf: boolean;

    @Field({ description: 'Día del mes que va a empezar a estar activa esta frecuencia' })
    diaInicio: number;

    @Field({ description: 'Mes del año que va a empazar a estar activa esta frecuencia' })
    mesInicio: number;

    @Field({ description: 'Día del mes que va a dejar a estar activa esta frecuencia' })
    diaFin: number;

    @Field({ description: 'Mes del año que va a dejar a estar activa esta frecuencia' })
    mesFin: number;

}