import AppRoutes from "./presentation/routes";
import Server from "./presentation/server";
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
