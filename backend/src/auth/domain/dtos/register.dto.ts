import { validatorExpReg } from "@utils/exp_regular";
import { UserEntity } from "../entity/user.entity";
import { randomUUID } from "crypto";

export class UserRegisterDTO implements UserEntity {
  private constructor(
    public id: string,
    public name: string,
    public email: string,
    public password: string
  ) {}

  static create(body: { [key: string]: any }): [string?, UserRegisterDTO?] {
    const { name, email, password } = body;
    const id = randomUUID();

    if (!name) return ["Missin name"];
    if (!email) return ["Missin email "];
    if (!password) return ["Missin  password"];
    if (!validatorExpReg.email.test(email)) return ["Email Invalidate"];

    return [undefined, new UserRegisterDTO(id, name, email, password)];
  }
}
