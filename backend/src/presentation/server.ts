import express, { Router } from "express";
import morgan, { Morgan } from "morgan";

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
    this.app.use(morgan("dev"));
    this.app.use(express.json());

    this.app.use(this.routes);

    this.app.listen(this.PORT, () => {
      console.log(`🚀 Servidor: http://localhost:${this.PORT}`);
    });
  }
}
