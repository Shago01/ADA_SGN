import { UUID } from "crypto";

export class User {
  constructor(
    public username: string,
    public Pasword: string,
    public name: string,
    public email: string
  ) {}
}
