export class LogingUserDto {
  private constructor(public username: string, public password: string) {}

  static create(body: { [key: string]: any }): [string?, LogingUserDto?] {
    const { username, password } = body;

    if (!username) return ["missing username"];
    if (!password) return ["missing password"];

    return [undefined, new LogingUserDto(username, password)];
  }
}
