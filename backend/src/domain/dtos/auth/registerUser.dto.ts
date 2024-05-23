import { validatorExpReg } from "@src/utils";

export class RegisterUserDto {
  private constructor(
    public username: string,
    public Pasword: string,
    public name: string,
    public email: string
  ) {}

  static create(body: { [key: string]: any }): [string?, RegisterUserDto?] {
    const { username, password, name, email } = body;

    if (!username) return ["Missing Name"];
    if (!password) return ["Missing password"];
    if (!name) return ["Missing Name"];
    if (!email) return ["Missing email"];
    if (!validatorExpReg.email.test(email)) return [" Email si no Validate"];

    return [undefined, new RegisterUserDto(username, password, name, email)];
  }
}
