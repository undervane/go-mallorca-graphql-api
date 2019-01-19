import { Field, ObjectType, Float } from "type-graphql";

@ObjectType({ description: "Information about one particular BiciPalma Station" })
export class BiciPalmaStation {

    @Field({ description: 'ID de la estación en concreto' })
    id: number;

    @Field({ nullable: true, description: 'Nombre de la estación en concreto' })
    nombre_estacion?: string;

    @Field(type => Float, { description: 'Longitud de las coordenadas de la estación en concreto' })
    longitud: number;

    @Field(type => Float, { description: 'Latitud de las coordenadas de la estación en concreto' })
    latitud: number

    @Field({ description: 'Cantidad de anclajes libres' })
    anclajes_libres: number

    @Field({ description: 'Cantidad de anclajes ocupados' })
    anclajes_ocupados: number

    @Field({ description: 'Cantidad de anclajes averiados' })
    anclajes_averiados: number

    @Field({ description: 'Cantidad de bicis libres' })
    bicis_libres: number

    @Field({ description: 'Cantidad de bicis averiadas' })
    bicis_averiadas: number

    @Field({ description: 'Si la estación comunica (da señales de vida)' })
    comunica: boolean

    @Field({ description: 'Si la estación esta cerrada' })
    cerrado: boolean

}