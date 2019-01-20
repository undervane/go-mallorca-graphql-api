import { Service } from "typedi";
import { stopsMock, stopMock } from "../../../test/mock/parada.mock";
import Axios, { AxiosRequestConfig } from "axios";
import { Parada } from "../../../types/parada.type";

@Service()
export class ParadaService {

    private readonly API_PATH = 'https://api.mobipalma.mobi'
    private readonly API_VERSION = '/1.0'
    private readonly API_PARADAS = '/paradas';

    private options: AxiosRequestConfig = {
        baseURL: this.API_PATH + this.API_VERSION,
        withCredentials: true
    }

    async findStatic(): Promise<Parada[]> {
        return stopsMock;
    }

    async findOneStatic(id: number): Promise<Parada> {
        return stopMock;
    }

    async find(): Promise<any> {
        return Axios.get<Parada[]>(this.API_PARADAS, this.options);
    }

    async findOne(id: number): Promise<any> {
        return Axios.get<Parada>(this.API_PARADAS + `/${id}`, this.options);
    }

}