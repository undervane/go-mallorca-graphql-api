import { ObjectType, Field, Int,  } from 'type-graphql';

// TODO: Name conflict

@ObjectType({ description: 'Detalles de la estación eléctrica' })
export class EstacionElectrica {

    @Field(type => Int, { description: 'Clave de la estación' })
    clave: number;

    @Field({ description: 'Nombre del aparcamiento' })
    aparcamientoLabel: string;

    @Field(type => Int, { description: 'Identificador del aparcamiento' })
    aparcamientoId: number;

    @Field({ description: 'Dirección de la estación' })
    direccion: string;

    // TODO: Long type
    @Field({ description: 'Coordenadas: Latitud de la estación' })
    latitud: number;

    // TODO: Long type
    @Field({ description: 'Coordenadas: Longitud de la estación' })
    longitud: number;

    @Field({ description: 'Texto descriptivo en español del horario de la estación' })
    horarioEs: string;

    @Field({ description: 'Texto descriptivo en inglés del horario de la estación' })
    horarioEn: string;

    @Field({ description: 'Texto descriptivo en alemán del horario de la estación' })
    horarioDe: string;

    @Field({ description: 'Texto descriptivo en catalán del horario de la estación' })
    horarioCt: string;

    @Field({ description: 'Texto descriptivo en español del nombre de la estación' })
    nombreEs: string;

    @Field({ description: 'Texto descriptivo en inglés del nombre de la estación' })
    nombreEn: string;

    @Field({ description: 'Texto descriptivo en alemán del nombre de la estación' })
    nombreDe: string;

    @Field({ description: 'Texto descriptivo en catalán del nombre de la estación' })
    nombreCt: string;

}