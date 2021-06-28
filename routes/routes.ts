import * as bodyParser from "body-parser";
import * as express from "express";
import { Logger } from "../logger/logger";
import Cliente from "./cliente";
import Pedido from "./pedido";
import Producto from "./producto";
import User from "./user";

class Routes {

    public express: express.Application;
    public logger: Logger;

    // array to hold users
    public users: any[];

    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
        this.logger = new Logger();
    }

    // Configure Express middleware.
    private middleware(): void {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    private routes(): void {

        // user route
        this.express.use("/user", User);
        this.express.use("/producto", Producto);
        this.express.use("/cliente", Cliente);
        this.express.use("/pedido", Pedido);
    }
}

export default new Routes().express;
