import { Field, ObjectType} from 'type-graphql';

@ObjectType({ description: 'Elemento por cada aviso encontrada' })
export class Aviso {

    @Field({ description: 'ID de la aviso en concreto' })
    id: number;

    @Field({ description: 'Nombre del servicio emisor (Bicipalma, emt, parking, transit)' })
    servicioEmisorLabel: string;

    @Field({ description: 'ID del servicio emisor' })
    servicioEmisorId: number;

    @Field({ description: 'Titulo de la aviso en catalán' })
    tituloCa: string;

    @Field({ description: 'Titulo de la aviso en alemán' })
    tituloDe: string;

    @Field({ description: 'Titulo de la aviso en español' })
    tituloEs: string;

    @Field({ description: 'Titulo de la aviso en inglés' })
    tituloEn: string;

    @Field({ description: 'Descripción de la aviso en catalán' })
    DescripcionCa: string;

    @Field({ description: 'Descripción de la aviso en alemán' })
    DescripcionDe: string;

    @Field({ description: 'Descripción de la aviso en español' })
    DescripcionEs: string;

    @Field({ description: 'Descripción de la aviso en inglés' })
    DescripcionEn: string;

    @Field({ description: 'Prioridad de la aviso (1~5 siendo 1 la prioridad máxima)' })
    prioridad: number;

    @Field({ description: 'Fecha absoluta del inicio de la aviso' })
    fechaInicio: number;

    @Field({ description: 'Fecha absoluta del fin de la aviso' })
    fechaFin: number;

    @Field({ description: '-Flag- si la aviso sigue activa' })
    activo: boolean;

    @Field({ description: 'Fecha absoluta del inicio de la publicacion de la aviso' })
    fechaInicioPublicacion: number;

    @Field({ description: 'Fecha absoluta del fin de la publicacion de la aviso' })
    fechaFinPublicacion: number;
    
    @Field({ description: 'Lista de ids de imagen enlazadas al aviso' })
    imagenavisos: number[];

    @Field({ description: 'Lista de ids de los servicios que se ven afectados por esta aviso' })
    serviciosAfectados: number[];

    // TODO: Implement image raw data
    // rawData: BinaryData;
}