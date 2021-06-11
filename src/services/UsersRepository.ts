import {User} from "@prisma/client";
import {Inject, Injectable} from "@tsed/di";
import {PrismaService} from "./PrismaService";

@Injectable()
export class UsersRepository {
  @Inject()
  protected prisma: PrismaService;

  get collection() {
    return this.prisma.user;
  }

  async create(user: Omit<User, "id">): Promise<User> {
    return this.collection.create({data: user});
  }

  async getAll(): Promise<User[]> {
    return this.collection.findMany();
  }
}
