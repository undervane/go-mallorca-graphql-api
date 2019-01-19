import { Field, ObjectType } from 'type-graphql';
import { Pvp } from './pvp.type';

@ObjectType({ description: 'Detalles sobre una tarifa' })
export class Tarifa {

    @Field({ description: 'ID de la tarifa' })
    id: number;

    @Field({ description: 'Nombre del aparcamiento de donde se aplica la tarifa' })
    aparcamientoLabel: number;

    @Field({ description: 'Id del aparcamiento de donde se aplica la tarifa' })
    aparcamientoId: number;

    @Field({ description: 'Label de la tarifa' })
    tarifaAparcamientoLabel: string;

    @Field({ description: 'Id de la tarifa' })
    tarifaAparcamientoId: number;

    @Field({ description: 'Fecha formateada (YYYY-MM-DD) del inicio de esta tarifa' })
    fechaInicio: string;

    @Field({ description: 'Fecha formateada (YYYY-MM-DD) del fin de esta tarifa' })
    fechaFin: string;

    @Field({ description: 'Hora formateada (hh-mm-ss) del inicio de esta tarifa' })
    horaInicio: string;

    @Field({ description: 'Hora formateada (hh-mm-ss) del fin de esta tarifa' })
    horafin: string;

    @Field({ description: 'Precio de la tarifa' })
    pvp: Pvp[];

}