import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.body;
      const users = this.listAllUsersUseCase.execute({user_id});
      return response.status(200).send(users);
    }
    catch (error) {
      return response.status(400).json({message: error.message})
    }
  }
}

export { ListAllUsersController };
