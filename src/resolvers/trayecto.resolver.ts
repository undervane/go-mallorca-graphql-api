import { Resolver, Query, Arg, Args } from "type-graphql";
import { Trayecto } from "../types/trayecto.type";
import { TrayectoService } from "../integration/mobipalma/service/trayecto.service";
import { GenericArgs } from "./args/generic.args";

@Resolver(of => Trayecto)
export class TrayectoResolver {

    constructor(private readonly trayectoService: TrayectoService) { }

    @Query(returns => [Trayecto], { description: "Get list of all stations" })
    async tracks(@Args() options: GenericArgs): Promise<Trayecto[]> {
        return await this.trayectoService.findStatic();
    }

    @Query(returns => Trayecto, { description: "Get one station by id" })
    async track(@Arg("id") id: number): Promise<Trayecto> {
        return await this.trayectoService.findOneStatic(id);
    }

}