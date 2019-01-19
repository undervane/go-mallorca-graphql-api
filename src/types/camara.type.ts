import { Field, ObjectType, Float } from 'type-graphql';

@ObjectType({ description: 'Detalles de una cámara' })
export class Camara {

    @Field({ description: 'ID de la cámara en concreto' })
    id: number;

    @Field({ description: 'Nombre de la cámara en catalán' })
    nombreCt: string;

    @Field({ description: 'Nombre de la cámara en alemán' })
    nombreDe: string;

    @Field({ description: 'Nombre de la cámara en español' })
    nombreEs: string;

    @Field({ description: 'Nombre de la cámara en inglés' })
    nombreEn: string;

    @Field(type => Float, { description: 'Latitud de las coordenadas de la cámara' })
    latitud: number;

    @Field(type => Float, { description: 'Longitud de las coordenadas de la cámara' })
    longitud: number;

    // TODO: Correct type is Float
    @Field({ description: 'Orientación de la cámara en grados (0 = N, 180 = S, -1 = desconocido)' })
    orientacion: number;

    // TODO: Implement camera raw data
    // @Field({ description: 'Imagen actual de una cámara determinada' })
    // RawData: BinaryData;

    @Field({ description: '-Flag- si esta activo' })
    activo: boolean;

    @Field({ description: 'Flag- si esta fuera de servicio' })
    sinServicio: boolean;

    @Field({ description: 'Dirección de la cámara' })
    direccion: string;

    @Field({ description: 'Fecha absoluta de la ultima modificación de los datos de la cámara' })
    last_modified: number;

}