import { PlatformTest } from "@tsed/common";
import { PrismaService } from "./PrismaService";

describe("PrismaService", () => {
  beforeEach(PlatformTest.create);
  afterEach(PlatformTest.reset);

  it("should do something", () => {
    const instance = PlatformTest.get<PrismaService>(PrismaService);
    // const instance = PlatformTest.invoke<PrismaService>(PrismaService); // get fresh instance

    expect(instance).toBeInstanceOf(PrismaService);
  });
});
