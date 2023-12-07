import { UserController } from "../controllers/usercontroller";
import { Ruter } from "./router";

export class UserRouter extends Ruter<UserController>  {

    constructor(){
        super(UserController)
    }

    routes(): void {
        this.router.get('/user', (req, res, next) => this.controller.getUser(req, res));
    }

}