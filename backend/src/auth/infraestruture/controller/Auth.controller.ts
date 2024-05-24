import { AuthUseCase } from "@auth/applicaction/caseUse";
import { CusstomErrors } from "errors/custom.error";
import { Request, Response } from "express";

export class AuthController {
  constructor(private authCase: AuthUseCase) {}

  login = async ({ body }: Request, res: Response) => {
    try {
      const userLogin = await this.authCase.loginUser(body);
      res.status(200).json(userLogin);
    } catch (error) {
      if (error instanceof CusstomErrors) {
        res.status(error.code).json({ message: error.message });
      } else {
        res.status(500).json(CusstomErrors.internalServer());
      }
    }
  };

  Register = async ({ body }: Request, res: Response) => {
    try {
      const userCreated = await this.authCase.registerUser(body);
      res.json(userCreated);
    } catch (error) {
      if (error instanceof CusstomErrors) {
        res.status(error.code).json({ message: error.message });
      } else {
        res.status(500).json(CusstomErrors.internalServer());
      }
    }
  };
}
