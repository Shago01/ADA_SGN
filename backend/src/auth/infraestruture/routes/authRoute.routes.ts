import { Router } from "express";
import { AuthController } from "../controller/Auth.controller";
import { MongoRepository } from "../repositories/Auth.repository.impl";
import { AuthUseCase } from "@auth/applicaction/caseUse";

export class AuthRoute {
  static get Route(): Router {
    const route = Router();

    // * Repositorio de connección
    const AuhtRepository = new MongoRepository();

    // * Casos de Uso del Sistema
    const AuhtUseCase = new AuthUseCase(AuhtRepository);

    // * Controollador
    const controller = new AuthController(AuhtUseCase);

    route.use("/login", controller.login);
    route.use("/register", controller.Register);
    return route;
  }
}
