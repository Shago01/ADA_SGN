import AppRoutes from "./server/routes";
import Server from "./server/server";
import { PORT } from "./utils/env";

(() => {
  main();
})();

async function main() {
  new Server({
    PORT: PORT,
    routes: AppRoutes.routes,
  }).start();
  // todo: conect database
}
