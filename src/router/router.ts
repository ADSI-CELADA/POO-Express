import { Router } from "express"

export class Ruter <C> {

    public router: Router;
    public controller: C;

    constructor(Ccontroller : {new () : C}){
        this.router = Router();
        this.controller = new Ccontroller();
        this.routes();
    }

    routes() {}

}