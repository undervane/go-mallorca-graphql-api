import { Service } from "typedi";
import { Estacion } from "../../../types/estacion.type";
import Axios, { AxiosRequestConfig } from "axios";
import { stationsMock } from "../../../test/mock/estacion.mock";

@Service()
export class EstacionService {

    private readonly API_PATH = 'https://api.mobipalma.mobi'
    private readonly API_VERSION = '/1.0'
    private readonly API_BICIPALMA = '/bicipalma';

    private options: AxiosRequestConfig = {
        baseURL: this.API_PATH + this.API_VERSION,
        withCredentials: true
    }

    async findStatic(): Promise<Estacion[]> {
        return stationsMock;
    }

    async findOneStatic(id: number): Promise<Estacion> {
        return stationsMock.find(station => station.id === id)
    }

    async find(): Promise<any> {
        return Axios.get<Estacion[]>(this.API_BICIPALMA, this.options);
    }

    async findOne(id: number): Promise<any> {
        return Axios.get<Estacion>(this.API_BICIPALMA + `/${id}`, this.options);
    }

}