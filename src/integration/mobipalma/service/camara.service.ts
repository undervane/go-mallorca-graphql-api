import { Service } from "typedi";
import Axios, { AxiosRequestConfig } from "axios";
import { Camara } from "../../../types/camara.type";
import { camerasMock } from "../../../test/mock/camara.mock";

@Service()
export class CamaraService {

    private readonly API_PATH = 'https://api.mobipalma.mobi'
    private readonly API_VERSION = '/1.0'
    private readonly API_CAMARAS = '/camaras';

    private options: AxiosRequestConfig = {
        baseURL: this.API_PATH + this.API_VERSION,
        withCredentials: true
    }

    async findStatic(): Promise<Camara[]> {
        return camerasMock;
    }

    async findOneStatic(id: number): Promise<Camara> {
        return camerasMock.find(camera => camera.id === id)
    }

    async find(): Promise<any> {
        return Axios.get<Camara[]>(this.API_CAMARAS, this.options);
    }

    async findOne(id: number): Promise<any> {
        return Axios.get<Camara>(this.API_CAMARAS + `/${id}`, this.options);
    }

}