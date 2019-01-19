import { ObjectType, Field, Float } from 'type-graphql';

@ObjectType({ description: 'Detalles sobre entradas y salidas del aparcamiento' })
export class EntradaAparcamiento {

    @Field({ description: 'ID del punto' })
    id: number;

    @Field({ description: 'Nombre del punto' })
    nombre: string;

    @Field({ description: 'Tipo del punto' })
    tipo: string;

    @Field({ description: '-Flag- Si es entrada' })
    isEntrada: boolean

    @Field(type => Float, { description: 'Latitud del punto' })
    latitud: number;

    @Field(type => Float, { description: 'Longitud del punto' })
    longitud: number;

    @Field({ description: 'Estado de la entrada del aparcamiento' })
    estado: string;

    @Field({ description: 'Fecha absoluta de la hora que cierra' })
    inicioCierre: number;

    @Field({ description: 'Fecha absoluta de la hora que deja de cerrar' })
    finCierre: number;

    @Field({ description: '-Flag- Si el punto esta abierto o cerrado' })
    cerrado: boolean

}