import {User} from "@prisma/client";
import {Email, Groups, MinLength, Nullable, Required} from "@tsed/schema";

export class UserModel implements User {
  @Groups("!creation")
  id: number;

  @Email()
  @Required()
  email: string;

  @Nullable(String)
  @MinLength(3)
  name: string | null;
}
