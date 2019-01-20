import { Service } from "typedi";
import Axios, { AxiosRequestConfig } from "axios";
import { Aparcamiento } from "../../../types/aparcamiento.type";
import { parkingsMock } from "../../../test/mock/aparcamiento.mock";
import { GenericArgs } from "../../../resolvers/args/generic.args";

@Service()
export class AparcamientoService {

    private readonly API_PATH = 'https://api.mobipalma.mobi';
    private readonly API_VERSION = '/1.0';
    private readonly API_APARCAMIENTOS = '/aparcamientos';
    private readonly API_ESTADOS = "/estados";

    private options: AxiosRequestConfig = {
        baseURL: this.API_PATH + this.API_VERSION,
        withCredentials: true
    }

    async findStatic(options: GenericArgs): Promise<Aparcamiento[]> {
        const start = options.skip;
        const end = options.skip + options.take;
        return await parkingsMock.slice(start, end);
    }

    async findOneStatic(id: number): Promise<Aparcamiento> {
        return parkingsMock.find(parking => parking.id === id);
    }

    async find(): Promise<any> {
        return Axios.get<Aparcamiento[]>(this.API_APARCAMIENTOS, this.options);
    }

    async findOne(id: number): Promise<any> {
        return Axios.get<Aparcamiento>(this.API_APARCAMIENTOS + `/${id}`, this.options);
    }

    async getStatus(): Promise<any> {
        return Axios.get<Aparcamiento>(this.API_APARCAMIENTOS + this.API_ESTADOS, this.options);
    }

}