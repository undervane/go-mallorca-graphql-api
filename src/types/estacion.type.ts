import { Field, ObjectType, Float, Int } from 'type-graphql';

@ObjectType({ description: 'Detalles de una estación' })
export class Estacion {

    @Field(type => Int, { description: 'ID de la estación en concreto' })
    id: number;

    @Field({ description: 'Nombre de la estación en concreto' })
    nombre_estacion: string;

    @Field(type => Float, { description: 'Longitud de las coordenadas de la estación en concreto' })
    longitud: number;

    @Field(type => Float, { description: 'Latitud de las coordenadas de la estación en concreto' })
    latitud: number

    @Field(type => Int, { description: 'Cantidad de anclajes libres' })
    anclajes_libres: number

    @Field(type => Int, { description: 'Cantidad de anclajes ocupados' })
    anclajes_ocupados: number

    @Field(type => Int, { description: 'Cantidad de anclajes averiados' })
    anclajes_averiados: number

    @Field(type => Int, { description: 'Cantidad de bicis libres' })
    bicis_libres: number

    @Field(type => Int, { description: 'Cantidad de bicis averiadas' })
    bicis_averiadas: number

    @Field({ description: 'Si la estación comunica (da señales de vida)' })
    comunica: boolean

    @Field({ description: 'Si la estación está cerrada' })
    cerrado: boolean

    @Field(type => Int, { description: 'Cantidad de anclajes totales en la estación' })
    get anclajesNumero(): number {
        return this.anclajes_averiados + this.anclajes_libres + this.anclajes_ocupados;
    }

}