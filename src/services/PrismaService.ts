import { Injectable, OnInit, OnDestroy } from "@tsed/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService extends PrismaClient implements OnInit, OnDestroy {
  async $onInit() {
    await this.$connect();
  }

  async $onDestroy() {
    await this.$disconnect();
  }
}
