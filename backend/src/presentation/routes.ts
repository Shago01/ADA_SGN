import { Router } from "express";
import AuthRoute from "./auth/routes";

export default class AppRoutes {
  static get routes(): Router {
    const rotuer = Router();

    rotuer.use("/api/auth", AuthRoute.route);

    return rotuer;
  }
}
