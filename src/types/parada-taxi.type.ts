import { Field, ObjectType, Int} from 'type-graphql';

@ObjectType({ description: 'Detalles de una parada de taxi' })
export class ParadaTaxi {

    @Field(type => Int, { description: 'Clave de la parada de taxi' })
    clave: number;

    @Field({ description: 'Dirección de la parada de taxi' })
    direccion: string;

    // TODO: Long Type
    @Field({ description: 'Coordenadas: Latitud de la parada de taxi' })
    latitud: number;

    // TODO: Long Type
    @Field({ description: 'Coordenadas: Longitud de la parada de taxi' })
    longitud: number;

    @Field(type => Int, { description: 'Número de plazas que "por lo general" tendran los taxis de esa parada' })
    numeroPlazas: number;

    @Field({ description: 'Texto descriptivo en español del horario de la parada de taxi' })
    horarioEs: string;

    @Field({ description: 'Texto descriptivo en inglés del horario de la parada de taxi' })
    horarioEn: string;

    @Field({ description: 'Texto descriptivo en alemán del horario de la parada de taxi' })
    horarioDe: string;

    @Field({ description: 'Texto descriptivo en catalán del horario de la parada de taxi' })
    horarioCt: string;

}