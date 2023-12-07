import { NextFunction, Request, Response } from "express";

export class UserController {

    public getUser(req: Request, res: Response): Promise<Response<any>> {
        return Promise.resolve(res.status(200).json({ user: "Rodrigo ríos" }));
      }
      

}
