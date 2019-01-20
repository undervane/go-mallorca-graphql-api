import { Field, ObjectType, Float } from 'type-graphql';
import { Tarifa } from './tarifa.type';
import { EntradaAparcamiento } from './entrada-aparcamiento.type';

@ObjectType({ description: 'Elemento por cada aparcamiento encontrado' })
export class Aparcamiento {

    @Field({ description: 'ID del aparcamiento en concreto' })
    id: number;

    @Field({ description: 'Nombre de la zona de hora' })
    zonaOraLabel: string;

    @Field({ description: 'Id de la zona de hora' })
    zonaOraId: string;

    @Field({ description: 'Nombre del aparcamiento' })
    nombre: string;

    @Field({ description: 'Número de plazas libres del bus' })
    numeroPlazas: number;

    @Field(type => Float, { description: 'Latitud de la localización del aparcamiento' })
    latitud: number;

    @Field(type => Float, { description: 'Longitud de la localización del aparcamiento' })
    longitud: number;

    @Field({ description: 'dirección del aparcamiento' })
    direccion: string;

    @Field({ description: '-Flag- Si el aparcamiento esta activo o no' })
    activo: boolean;

    @Field({ description: 'Descripción de puntos de recarga en español' })
    recargaEs: string;

    @Field({ description: 'Descripción de puntos de recarga en catalán' })
    recargaCt: string;

    @Field({ description: 'Descripción de puntos de recarga en inglés' })
    recargaEn: string;

    @Field({ description: 'Descripción de puntos de recarga en alemán' })
    recargaDe: string;

    @Field({ description: 'Tiempo absoluto en el cual este aparcamiento fue modificado por última vez' })
    lastModified: number;

    @Field(type => [Tarifa], { description: 'Nombre de la zona de hora' })
    vigenciaTarifas: Tarifa[];

    @Field(type => [EntradaAparcamiento], { description: 'Lista de puntos de entrada/salida disponibles para el aparcamiento' })
    puntosAparcamientos: EntradaAparcamiento[];

    @Field({ description: 'Cantidad de plazas libres en el aparcamiento' })
    plazasLibres: number;

    @Field({ description: 'String del estado del aparcamiento' })
    nivel: string;

    @Field({ description: 'True o false como abierto o cerrado en funcion del horario del aparcamiento y el dia de hoy' })
    abierto: boolean;

}