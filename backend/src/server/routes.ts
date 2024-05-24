import { AuthRoute } from "@auth/infraestruture/routes/authRoute.routes";
import { Router } from "express";

export default class AppRoutes {
  static get routes(): Router {
    const rotuer = Router();

    rotuer.use("/api/auth", AuthRoute.Route);

    return rotuer;
  }
}
