import express, { Router } from "express";
import morgan from "morgan";
import cors from "cors";
import mongoose from "mongoose";
import { URI_DB } from "@utils/env";

interface paramasServer {
  PORT: string;
  routes: Router;
}

export default class Server {
  private readonly app = express();
  private readonly PORT: string;
  private readonly routes: Router;

  constructor(paramasServer: paramasServer) {
    const { PORT, routes } = paramasServer;
    this.PORT = PORT || "3000";
    this.routes = routes;
  }

  async start() {
    mongoose.set("strictQuery", false);
    mongoose
      .connect(URI_DB)
      .then(() => {
        console.log("estamos conectados");
      })
      .catch((err) => {
        console.log("algo ha salido mal", err);
      });

    // * midlleware
    this.app.use(morgan("dev"));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors());

    // * routes
    this.app.use(this.routes);

    // * iniciar el server
    this.app.listen(this.PORT, () => {
      console.log(`🚀 Servidor: http://localhost:${this.PORT}`);
    });
  }
}
