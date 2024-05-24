import { UserRegisterDTO } from "../dtos/register.dto";
import { UserEntity } from "../entity/user.entity";

export interface AuhtRepository {
  register(registerUser: UserRegisterDTO): Promise<UserEntity>;
  userByEmail(email: string): Promise<UserEntity | null>;
}
