import { Resolver, Query, Arg, Args } from "type-graphql";
import { ParadaService } from "../integration/mobipalma/service/parada.service";
import { Parada } from "../types/parada.type";
import { GenericArgs } from "./args/generic.args";

@Resolver(of => Parada)
export class ParadaResolver {

    constructor(private readonly paradaService: ParadaService) { }

    @Query(returns => [Parada], { description: "Get list of all stations" })
    async stops(@Args() options: GenericArgs): Promise<Parada[]> {
        return await this.paradaService.findStatic();
    }

    @Query(returns => Parada, { description: "Get one station by id" })
    async stop(@Arg("id") id: number): Promise<Parada> {
        return await this.paradaService.findOneStatic(id);
    }

}