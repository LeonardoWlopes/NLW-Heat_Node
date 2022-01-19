import "dotenv/config";
import express from "express";

import { router } from "./routes";
import { AuthenticateUserService } from "./services/AuthenticateUserService";

const app = express();

app.use(express.json());

app.use(router);

app.get("/github", (req, res) => {
  res.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`
  );
});

app.get("/signin/callback", (req, res) => {
  const { code } = req.query;
  return res.json(code);
  //new AuthenticateUserService().execute(code as string);
});

const port = 4000;
app.listen(port, () => console.log("🚀 Server is running on PORT", port));
