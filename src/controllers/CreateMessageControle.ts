import { Request, Response } from "express";

class CreateMessageControle {
  async handle(req: Request, res: Response) {
    const { message } = req.body;
  }
}

export { CreateMessageControle };
