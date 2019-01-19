import { Field, ObjectType } from "type-graphql";

@ObjectType({ description: 'Get signing key' })
export class AuthKey {

    @Field({ description: 'Key' })
    key: string;

}