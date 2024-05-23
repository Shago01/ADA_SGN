import { Router } from "express";
import { NoteController } from "./controller";

export default class NoteRoute {
  static get route(): Router {
    const router = Router();

    router.get("/", NoteController.getAll);
    router.post("/", NoteController.create);
    router.put("/:id", NoteController.update);
    router.delete("/:id", NoteController.delete);

    return router;
  }
}
