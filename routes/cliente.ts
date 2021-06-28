import * as bodyParser from "body-parser";
import * as express from "express";
import {ECliente} from "../entity/cliente";
import {conexion} from "../entity/conexion";
import { Logger } from "../logger/logger";

class Cliente {

    public express: express.Application;
    public logger: Logger;

    // array to hold products
    public clientes: any[];

    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
        this.clientes = [
            {id: 5, nombre: "Juan", us_telegram: "juan_telegram", direccion: "Calle falsa 123", mail: "juan@juan.com"}];
        this.logger = new Logger();
    }

    // Configure Express middleware.
    private middleware(): void {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    private routes(): void {

        // Trae todos los productos existentes
        this.express.get("/", (req, res, next) => {
            this.logger.info("url:::::::" + req.url);

            conexion.then(async (connection) => {
                const clienteRepository = connection.getRepository(ECliente);

                const clientes = await clienteRepository.find();
                res.json(clientes);
                // tslint:disable-next-line:no-console
            }).catch((error) => console.log(error));
        });

        // Encuentra productos por ID
        this.express.get("/:id", (req, res, next) => {
            this.logger.info("url:::::::" + req.url);
            // tslint:disable-next-line:only-arrow-functions
            // const cliente = this.clientes.filter(function(unCliente) {
            //     if (req.params.id === unCliente.id) {
            //         return unCliente;
            //     }
            // });

            conexion.then(async (connection) => {
                const clienteRepository = connection.getRepository(ECliente);
                const cliente = await clienteRepository.findOne({ id: req.params.id });
                res.json(cliente);
                // tslint:disable-next-line:no-console
            }).catch((error) => console.log(error));
        });

        // Actualiza un producto existente
        this.express.put("/:id", (req, res, next) => {
            this.logger.info("url:::::::" + req.url);
            // tslint:disable-next-line:only-arrow-function
            conexion.then(async (connection) => {
                const clienteRepository = connection.getRepository(ECliente);
                const clienteUpdate = await clienteRepository.findOne({ id: req.params.id });
                Object.keys(req.body).forEach((key) => {
                    if (key !== "id") {
                        // @ts-ignore
                        clienteUpdate[key] = req.body[key]; }
                });
                await clienteRepository.save(clienteUpdate);
                res.json(clienteUpdate);

                // tslint:disable-next-line:no-console
            }).catch((error) => console.log(error));

            // this.clientes.filter(function(unCliente) {
            //     if (req.body.id === unCliente.id) {
            //         unCliente.nombre = req.body.nombre;
            //         unCliente.us_telegram = req.body.us_telegram;
            //         unCliente.direccion = req.body.direccion;
            //         unCliente.mail = req.body.mail;
            //     }
            // });

        });

        // Agregar un nuevo producto
        // req.body has object of type {id: 5, nombre: "banana", precio: "25", descripcion: "Banana de Ecuador"}
        this.express.post("/", (req, res, next) => {
            this.logger.info("url:::::::" + req.url);
            // this.clientes.push(req.body);

            conexion.then((connection) => {
                // tslint:disable-next-line:no-console
            }).catch((error) => console.log(error));

            conexion.then(async (connection) => {
                // create a photo
                const cliente = new ECliente();
                cliente.id = req.body.id;
                cliente.nombre = req.body.nombre;
                cliente.us_telegram = req.body.us_telegram;
                cliente.direccion = req.body.direccion;
                cliente.mail = req.body.mail;

                // get entity repositories
                const clienteRepository = connection.getRepository(ECliente);

                // first we should save a photo
                await clienteRepository.save(cliente);

                // tslint:disable-next-line:no-console
            }).catch((error) => console.log(error));

            // createConnection(/*...*/).then(async (connection) => {
            //     // create a photo
            //     const cliente = new ECliente();
            //     cliente.id = req.body.id;
            //     cliente.nombre = req.body.nombre;
            //     cliente.us_telegram = req.body.us_telegram;
            //     cliente.direccion = req.body.direccion;
            //     cliente.mail = req.body.mail;
            //
            //     // get entity repositories
            //     const clienteRepository = connection.getRepository(ECliente);
            //
            //     // first we should save a photo
            //     await clienteRepository.save(cliente);
            //
            //     // tslint:disable-next-line:no-console
            // }).catch((error) => console.log(error));

            res.json(req.body);
        });

        // Elimina un  producto
        this.express.delete("/:id", (req, res, next) => {
            this.logger.info("url:::::::" + req.url);

            conexion.then(async (connection) => {
                const clienteRepository = connection.getRepository(ECliente);
                const clienteDelete = await clienteRepository.findOne({ id: req.params.id });
                await clienteRepository.remove(clienteDelete);
                res.json(clienteDelete);

                // tslint:disable-next-line:no-console
            }).catch((error) => console.log(error));
        });

    }
}

export default new Cliente().express;
