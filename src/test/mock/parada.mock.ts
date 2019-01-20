import { Parada } from "../../types/parada.type";

export var stopMock = {
    latitud: '2.659399509',
    longitud: '39.56590061',
    error: false,
    errorMessage: "",
    errorType: 0,
    nombreParada: "Porta de Sant Antoni",
    timestamp: 1436512824107,
    estimaciones: [
        {
            color: "F3DB78",
            line: "11",
            vh_first: {
                destino: "SA INDIOTERIA",
                seconds: 570,
                enParada: false,
                llegando: false
            },
            vh_second: {
                destino: "SA INDIOTERIA",
                seconds: 2370,
                enParada: false,
                llegando: false
            }
        }
    ]
} as Parada;

export var stopsMock = [
    {
        latitud: '2.659399509',
        longitud: '39.56590061',
        error: false,
        errorMessage: "",
        errorType: 0,
        nombreParada: "Porta de Sant Antoni",
        timestamp: 1436512824107,
        estimaciones: [
            {
                color: "F3DB78",
                line: "11",
                vh_first: {
                    destino: "SA INDIOTERIA",
                    seconds: 570,
                    enParada: false,
                    llegando: false
                },
                vh_second: {
                    destino: "SA INDIOTERIA",
                    seconds: 2370,
                    enParada: false,
                    llegando: false
                }
            }
        ]
    }
] as Parada[];