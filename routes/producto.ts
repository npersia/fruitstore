import * as bodyParser from "body-parser";
import * as express from "express";
import {ECliente} from "../entity/cliente";
import {conexion} from "../entity/conexion";
import {EProducto} from "../entity/producto";
import { Logger } from "../logger/logger";

class Producto {

    public express: express.Application;
    public logger: Logger;

    // array to hold products
    public productos: any[];

    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
        this.productos = [{id: 5, nombre: "banana", precio: "25", descripcion: "Banana de Ecuador"}];
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
                const productoRepository = connection.getRepository(EProducto);

                const productos = await productoRepository.find();
                res.json(productos);
                // tslint:disable-next-line:no-console
            }).catch((error) => console.log(error));        });

        // Encuentra productos por ID
        this.express.get("/:id", (req, res, next) => {
            this.logger.info("url:::::::" + req.url);
            // tslint:disable-next-line:only-arrow-functions
            conexion.then(async (connection) => {
                const productoRepository = connection.getRepository(EProducto);
                const producto = await productoRepository.findOne({ id: req.params.id });
                res.json(producto);
                // tslint:disable-next-line:no-console
            }).catch((error) => console.log(error));
        });

        // Actualiza un producto existente
        this.express.put("/:id", (req, res, next) => {
            this.logger.info("url:::::::" + req.url);
            // tslint:disable-next-line:only-arrow-functions
            conexion.then(async (connection) => {
                const productoRepository = connection.getRepository(EProducto);
                const productoUpdate = await productoRepository.findOne({ id: req.params.id });
                Object.keys(req.body).forEach((key) => {
                    if (key !== "id") {
                        // @ts-ignore
                        productoUpdate[key] = req.body[key]; }
                });
                await productoRepository.save(productoUpdate);
                res.json(productoUpdate);

                // tslint:disable-next-line:no-console
            }).catch((error) => console.log(error));        });

        // Agregar un nuevo producto
        // req.body has object of type {id: 5, nombre: "banana", precio: "25", descripcion: "Banana de Ecuador"}
        this.express.post("/", (req, res, next) => {
            this.logger.info("url:::::::" + req.url);
            this.productos.push(req.body);
            conexion.then(async (connection) => {
                // create a photo
                const producto = new EProducto();
                producto.id = req.body.id;
                producto.nombre = req.body.nombre;
                producto.precio = req.body.precio;
                producto.descripcion = req.body.descripcion;

                // get entity repositories
                const productoRepository = connection.getRepository(EProducto);

                // first we should save a photo
                await productoRepository.save(producto);

                // tslint:disable-next-line:no-console
            }).catch((error) => console.log(error));
            res.json(req.body);
        });

        // Elimina un  producto
        this.express.delete("/:id", (req, res, next) => {
            this.logger.info("url:::::::" + req.url);

            conexion.then(async (connection) => {
                const productoRepository = connection.getRepository(EProducto);
                const productoDelete = await productoRepository.findOne({ id: req.params.id });
                await productoRepository.remove(productoDelete);
                res.json(productoDelete);

                // tslint:disable-next-line:no-console
            }).catch((error) => console.log(error));
        });

    }
}

export default new Producto().express;
