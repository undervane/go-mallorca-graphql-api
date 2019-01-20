import { Estacion } from "../../types/estacion.type";

export var stationMock = {
    id: 1,
    nombre_estacion: 'PARC DE SES VELES',
    longitud: 2.659399509,
    latitud: 39.56590061,
    anclajes_libres: 0,
    anclajes_ocupados: 10,
    anclajes_averiados: 0,
    bicis_libres: 10,
    bicis_averiadas: 0,
    comunica: true,
    cerrado: false
} as Estacion

export var stationsMock = [
    {
        id: 1,
        nombre_estacion: 'PARC DE SES VELES',
        longitud: 2.659399509,
        latitud: 39.56590061,
        anclajes_libres: 0,
        anclajes_ocupados: 10,
        anclajes_averiados: 0,
        bicis_libres: 10,
        bicis_averiadas: 0,
        comunica: true,
        cerrado: false
    },
    {
        id: 2,
        nombre_estacion: 'PARC DE BLANQUERNA',
        longitud: 2.659399509,
        latitud: 39.56590061,
        anclajes_libres: 4,
        anclajes_ocupados: 4,
        anclajes_averiados: 2,
        bicis_libres: 4,
        bicis_averiadas: 1,
        comunica: true,
        cerrado: false
    }
] as Estacion[]
