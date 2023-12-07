import express from "express";
import morgan from "morgan";
import cors from "cors";
import { UserRouter } from "./router/userRouter";

class ServerApp {

    public app: express.Application = express();

    private port: number = 3000;

    constructor() {
        this.middlewares();
        this.httpRoutes();
        this.listen();
    }

    private middlewares() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(morgan('dev'));
        this.app.use(cors());
    }

    routers(): Array<express.Router> {
        return [new UserRouter().router];
    }

    private httpRoutes() {
        this.app.use('/api', this.routers());
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log("Server listeng on port " + this.port);
        })
    }

}

new ServerApp();