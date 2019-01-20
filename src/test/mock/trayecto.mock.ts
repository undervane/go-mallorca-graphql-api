import { Trayecto } from "../../types/trayecto.type";
import { TrackStatusEnum } from "../../types/enum/track-status.enum";

export var tracksMock = [{
    "id": 11,
    "descES": "A. Gabriel Alomar i Villalonga hacioa Plaza España",
    "descEN": "...",
    "descCA": "...",
    "descDE": "...",
    "tipo": "1",
    "coordenadas": [
        {
            latitud: 39.5712257937,
            longitud: 2.6572127080000003
        }
    ],
    "estado": TrackStatusEnum.DENSO
}] as Trayecto[];