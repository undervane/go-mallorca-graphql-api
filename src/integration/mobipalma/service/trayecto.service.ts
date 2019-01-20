import { Service } from "typedi";
import Axios, { AxiosRequestConfig } from "axios";
import { Trayecto } from "../../../types/trayecto.type";
import { tracksMock } from "../../../test/mock/trayecto.mock";

@Service()
export class TrayectoService {

    private readonly API_BASE = 'https://api.mobipalma.mobi'
    private readonly API_VERSION = '/1.0'
    private readonly PATH_TRAYECTO = '/trayecto';
    // private readonly PATH_ESTADOS = '/estados'

    private options: AxiosRequestConfig = {
        baseURL: this.API_BASE + this.API_VERSION,
        withCredentials: true
    }

    async findStatic(): Promise<Trayecto[]> {
        return tracksMock;
    }

    async findOneStatic(id: number): Promise<Trayecto> {
        return tracksMock.find(track => track.id === id);
    }

    async find(): Promise<any> {
        return Axios.get<Trayecto[]>(this.PATH_TRAYECTO, this.options);
    }

    // TODO: Implement track status type
    // async getStatus(): Promise<any> {
    //     return Axios.get<Trayecto>(this.PATH_TRAYECTO + this.PATH_ESTADOS, this.options);
    // }

}