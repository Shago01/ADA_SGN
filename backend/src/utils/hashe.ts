import { compare, hash } from "bcrypt";

export class Hashe {
  static async hashPassword(password: string): Promise<string> {
    const hashedPassword = await hash(password, 10);
    return hashedPassword;
  }
  static async comparePasswords(
    plainPassword: string,
    hashedPassword: string
  ): Promise<boolean> {
    const match = await compare(plainPassword, hashedPassword);
    return match;
  }
}
