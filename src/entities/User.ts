import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
export class User {
    @Field(() => ID)
    id: number = 0;

    @Field()
    name: string = '';

    @Field()
    email: string = '';
}

