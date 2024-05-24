import { AuhtRepository } from "@auth/domain/repositorie/user.repository";
import { UserModel } from "../model/user.model";
import { UserRegisterDTO } from "@auth/domain/dtos/register.dto";
import { UserEntity } from "@auth/domain/entity/user.entity";

export class MongoRepository implements AuhtRepository {
  userByEmail = async (email: string): Promise<any> => {
    const userByEmail = await UserModel.findOne({ email });
    return userByEmail;
  };
  register = async (registerUser: UserRegisterDTO): Promise<any> => {
    const userCreate = await UserModel.create(registerUser);
    return userCreate;
  };
}
