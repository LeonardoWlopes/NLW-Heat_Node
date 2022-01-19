import { Router } from "express";
import { AuthenticateUserControle } from "./controllers/AuthenticateUserController";
import { CreateMessageControle } from "./controllers/CreateMessageControle";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";

const router = Router();

router.post("/authenticate", new AuthenticateUserControle().handle);

router.post(
  "/messages",
  ensureAuthenticated,
  new CreateMessageControle().handle
);

export { router };
