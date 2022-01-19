import { Request, Response } from "express";
import { io } from "../app";
import { CreateMessageService } from "../services/CreateMessageService";

class CreateMessageControle {
  async handle(req: Request, res: Response) {
    const { message: msg } = req.body;
    const { user_id } = req;

    const service = new CreateMessageService();

    const result = await service.execute(msg, user_id);

    

    if (!!result) return res.json(result);
  }
}

export { CreateMessageControle };
