import {BodyParams, Controller, Get, Post} from "@tsed/common";
import {Inject} from "@tsed/di";
import {UsersRepository} from "../services/UsersRepository";
import {Groups, Returns, Summary} from "@tsed/schema";
import {UserModel} from "../models/UserModel";

@Controller("/users")
export class UsersController {
  @Inject()
  protected repository: UsersRepository;

  @Post("/")
  @Summary("Add a new user")
  @Returns(201, UserModel).Description("User created")
  create(@BodyParams() @Groups("creation") user: UserModel) {
    return this.repository.create(user);
  }

  @Get("/")
  @Summary("Return all users")
  @Returns(200, UserModel)
  getAll() {
    return this.repository.getAll();
  }
}

