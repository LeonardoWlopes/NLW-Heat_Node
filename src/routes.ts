import { Router } from "express";
import { AuthenticateUserControle } from "./controllers/AuthenticateUserController";

const router = Router();

router.post("/authenticate", new AuthenticateUserControle().handle);

export { router };
