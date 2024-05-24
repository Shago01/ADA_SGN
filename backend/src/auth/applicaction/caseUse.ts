import { UserRegisterDTO } from "@auth/domain/dtos/register.dto";
import { UserEntity } from "@auth/domain/entity/user.entity";
import { AuhtRepository } from "@auth/domain/repositorie/user.repository";
import { Hashe } from "@utils/hashe";
import { CusstomErrors } from "errors/custom.error";

export class AuthUseCase {
  constructor(private readonly userRepository: AuhtRepository) {}

  loginUser = async (body: UserEntity) => {
    const { email, password } = body!;
    const user = await this.userRepository.userByEmail(email!);

    const passwordCorrect =
      user === null
        ? false
        : await Hashe.comparePasswords(password!, user.password!);

    if (!(user && passwordCorrect))
      throw CusstomErrors.unauthorization("Correo o Contraseña Equivocados");
  };

  registerUser = async (body: UserEntity) => {
    const [err, user] = UserRegisterDTO.create(body);
    if (err) throw CusstomErrors.badReques(err);

    const passwordHashed = await Hashe.hashPassword(user!.password);

    const { id, email, name } = await this.userRepository.register({
      ...user!,
      password: passwordHashed,
    });

    return { id, email, name };
  };
}
