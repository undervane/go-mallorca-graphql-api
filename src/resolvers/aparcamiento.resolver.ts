import { Resolver, Query, Arg, Args } from "type-graphql";
import { Aparcamiento } from "../types/aparcamiento.type";
import { AparcamientoService } from "../integration/mobipalma/service/aparcamiento.service";
import { GenericArgs } from "./args/generic.args";

@Resolver(of => Aparcamiento)
export class AparcamientoResolver {

    constructor(private readonly aparcamientoService: AparcamientoService) { }

    @Query(returns => [Aparcamiento], { description: "Get list of all stations" })
    async parkings(@Args() options: GenericArgs): Promise<Aparcamiento[]> {
        return await this.aparcamientoService.findStatic(options);
    }

    @Query(returns => Aparcamiento, { description: "Get one station by id" })
    async parking(@Arg("id") id: number): Promise<Aparcamiento> {
        return await this.aparcamientoService.findOneStatic(id);
    }

}