import { PlatformTest } from "@tsed/common";
import { UsersRepository } from "./UsersRepository";

describe("UsersRepository", () => {
  beforeEach(PlatformTest.create);
  afterEach(PlatformTest.reset);

  it("should do something", () => {
    const instance = PlatformTest.get<UsersRepository>(UsersRepository);
    // const instance = PlatformTest.invoke<UsersRepository>(UsersRepository); // get fresh instance

    expect(instance).toBeInstanceOf(UsersRepository);
  });
});
