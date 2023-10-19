import { Resolver, Query, Arg } from "type-graphql";
import { User } from "../entities/User";

const users: User[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com"
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "jane.doe@example.com"
  }
];

@Resolver(User)
export class UserResolver {
  @Query(() => [User])
  users(): User[] {
    return users;
  }

  @Query(() => User, { nullable: true })
  user(@Arg("id") id: number): User | undefined {
    return users.find(user => user.id === id);
  }
}
