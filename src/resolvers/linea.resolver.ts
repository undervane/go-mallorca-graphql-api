import { Resolver, Query, Arg, Args } from "type-graphql";
import { GenericArgs } from "./args/generic.args";
import { Linea } from "../types/linea.type";
import { LineaService } from "../integration/mobipalma/service/linea.service";

@Resolver(of => Linea)
export class LineaResolver {

    constructor(private readonly lineaService: LineaService) { }

    @Query(returns => [Linea], { description: "Get list of all stations" })
    async lines(@Args() options: GenericArgs): Promise<Linea[]> {
        return await this.lineaService.findStatic(options);
    }

    @Query(returns => Linea, { description: "Get one station by id" })
    async line(@Arg("id") id: number): Promise<Linea> {
        return await this.lineaService.findOneStatic(id);
    }

}