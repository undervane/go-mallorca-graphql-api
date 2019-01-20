import { Resolver, Query, Arg, Args } from "type-graphql";
import { Camara } from "../types/camara.type";
import { CamaraService } from "../integration/mobipalma/service/camara.service";
import { GenericArgs } from "./args/generic.args";

@Resolver(of => Camara)
export class CamaraResolver {

    constructor(private readonly camaraService: CamaraService) { }

    @Query(returns => [Camara], { description: "Get list of all stations" })
    async cameras(@Args() options: GenericArgs): Promise<Camara[]> {
        return await this.camaraService.findStatic();
    }

    @Query(returns => Camara, { description: "Get one station by id" })
    async camera(@Arg("id") id: number): Promise<Camara> {
        return await this.camaraService.findOneStatic(id);
    }

}