import { Field, ObjectType } from 'type-graphql';

@ObjectType({ description: 'Detalles sobre el precio de una tarifa' })
export class Pvp {

    // TODO: Check type is correct, Number[24]
    @Field({ description: 'Lista de números de 24 posiciones que indica el precio por minuto que tiene cada hora' })
    minutoHora: number;

    // TODO: Name is not equal to documentation, original was 24h 
    @Field({ description: 'Precio que tiene las 24h' })
    dayPrice: number;

}