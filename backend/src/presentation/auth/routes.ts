import { Router } from "express";
import { AuthController } from "./controller";

export default class AuthRoute {
  static get route(): Router {
    const router = Router();
    const controller = new AuthController();

    router.post("login", controller.login);
    router.post("registrer", controller.register);

    return router;
  }
}
