import { Service } from "typedi";
import Axios, { AxiosRequestConfig } from "axios";
import { GenericArgs } from "../../../resolvers/args/generic.args";
import { Linea } from "../../../types/linea.type";
import { linesMock } from "../../../test/mock/linea.mock";

@Service()
export class LineaService {

    private readonly API_PATH = 'https://api.mobipalma.mobi';
    private readonly API_VERSION = '/1.0';
    private readonly API_LINEAS_EMT = '/lineasemt';

    private options: AxiosRequestConfig = {
        baseURL: this.API_PATH + this.API_VERSION,
        withCredentials: true
    }

    async findStatic(options: GenericArgs): Promise<Linea[]> {
        const start = options.skip;
        const end = options.skip + options.take;
        return await linesMock.slice(start, end);
    }

    async findOneStatic(id: number): Promise<Linea> {
        return linesMock.find(parking => parking.claveLinea === id);
    }

    async find(): Promise<any> {
        return Axios.get<Linea[]>(this.API_LINEAS_EMT, this.options);
    }

    async findOne(id: number): Promise<any> {
        return Axios.get<Linea>(this.API_LINEAS_EMT + `/${id}`, this.options);
    }

}