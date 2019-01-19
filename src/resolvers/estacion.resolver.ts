import { Resolver, Query, Arg } from "type-graphql";
import { Estacion } from "../types/estacion.type";
import { EstacionService } from "../integration/mobipalma/service/estacion.service";

@Resolver(of => Estacion)
export class EstacionResolver {

    constructor(private readonly estacionService: EstacionService) { }

    @Query(returns => [Estacion], { description: "Get list of all stations" })
    async stations(): Promise<Estacion[]> {
        return await this.estacionService.findStatic();
    }

    @Query(returns => Estacion, { description: "Get one station by id" })
    async station(@Arg("id") id: number): Promise<Estacion> {
        return await this.estacionService.findOneStatic(id);
    }

}