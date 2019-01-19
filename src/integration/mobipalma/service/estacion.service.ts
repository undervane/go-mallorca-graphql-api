import { Service } from "typedi";
import { Estacion } from "../../../types/estacion.type";
import Axios, { AxiosRequestConfig } from "axios";

@Service()
export class EstacionService {

    private readonly API_PATH = 'https://api.mobipalma.mobi'
    private readonly API_VERSION = '/1.0'
    private readonly API_BICIPALMA = '/bicipalma';

    options: AxiosRequestConfig = {
        baseURL: this.API_PATH + this.API_VERSION,
        withCredentials: true
    }

    private stations = [
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

    async findStatic(): Promise<Estacion[]> {
        return this.stations;
    }

    async findOneStatic(id: number): Promise<Estacion> {
        return this.stations.find(station => station.id === id)
    }

    async find(): Promise<any> {
        return Axios.get<Estacion[]>(this.API_BICIPALMA, this.options);
    }

    async findOne(id: number): Promise<any> {
        return Axios.get<Estacion>(this.API_BICIPALMA + `/${id}`, this.options);
    }

}