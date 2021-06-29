import * as bodyParser from "body-parser";
import * as express from "express";
import {Column, JoinColumn, OneToOne} from "typeorm";
import {ECliente} from "../entity/cliente";
import {conexion} from "../entity/conexion";
import {EPedidoProducto} from "../entity/pedido_producto";
import { Logger } from "../logger/logger";
import { EPedido } from "../entity/pedido";
import { EProducto } from "../entity/producto";


// tslint:disable-next-line:max-classes-per-file
class Pedido {

    public express: express.Application;
    public logger: Logger;

    // array to hold products
    public pedidos: any[];

    // Configure Express middleware.
    // tslint:disable-next-line:max-line-length
    public pedidoRet: any[];
    public aux: any[];

/**/
    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
        this.pedidos = [
            {id: 5, nombre: "banana", productos: [{id_producto: 4, cantidad: 10}, {id_producto: 2, cantidad: 15}],
                // tslint:disable-next-line:object-literal-sort-keys
                precio: 240, cliente: 7, estado: "pendiente"}];
        this.pedidoRet = [];
        this.aux = [];

        this.logger = new Logger();
    }
    private middleware(): void {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    private routes(): void {

        // Trae todos los pedidos existentes
        this.express.get("/", (req, res, next) => {
            this.logger.info("url:::::::" + req.url);
            conexion.then(async (connection) => {
                const pedidoRepository = connection.getRepository(EPedido);
                const pedidos = await pedidoRepository.find();

                // tslint:disable-next-line:prefer-const

                const pedidoProductoRepository = connection.getRepository(EPedidoProducto);
                for (const p of pedidos) {
                    const pedidoProducto = await pedidoProductoRepository.find({pedido: p});

                    for (const pedProd of pedidoProducto) {
                        this.aux.push({id_producto: pedProd.id, cantidad: pedProd.cantidad});
                    }

                    /**/
                    this.pedidoRet.push({
                        id: p.id,
                        precio : p.precio,
                        // tslint:disable-next-line:object-literal-sort-keys
                        us_telegram: p.us_telegram,
                        // tslint:disable-next-line:object-literal-sort-keys
                        direccion: p.direccion,
                        // tslint:disable-next-line:object-literal-sort-keys
                        estado : p.estado,
                        productos: this.aux,
                    });
                    this.aux = [];

                }
/**/
                res.json(this.pedidoRet);
                this.pedidoRet = [];
                // tslint:disable-next-line:no-console
            }).catch((error) => console.log(error));        });

        // Encuentra pedidos por ID
        this.express.get("/:id", (req, res, next) => {
            this.logger.info("url:::::::" + req.url);
            // tslint:disable-next-line:only-arrow-functions


            // @ts-ignore
            conexion.then(async (connection) => {
                const pedidoRepository = connection.getRepository(EPedido);
                const unPedido = await pedidoRepository.findOne({ id: req.params.id });

                // tslint:disable-next-line:prefer-const



                const pedidoProductoRepository = connection.getRepository(EPedidoProducto);
                const pedidoProducto = await pedidoProductoRepository.find({ pedido: unPedido });


                for (const pedProd of pedidoProducto) {
                    this.aux.push({id_producto: pedProd.id, cantidad: pedProd.cantidad });
                }

                this.pedidoRet.push({
                    id: unPedido.id,
                    precio : unPedido.precio,
                    // tslint:disable-next-line:object-literal-sort-keys
                    us_telegram: unPedido.us_telegram,
                    // tslint:disable-next-line:object-literal-sort-keys
                    direccion: unPedido.direccion,
                    // tslint:disable-next-line:object-literal-sort-keys
                    estado : unPedido.estado,
                    productos: this.aux,
                });

                res.json(this.pedidoRet[0]);
                this.aux = [];
                this.pedidoRet = [];
                // tslint:disable-next-line:no-console
            }).catch((error) => console.log(error));


        });

        this.express.put("/:us_telegram", (req, res, next) => {
            this.logger.info("url:::::::" + req.url);
            // tslint:disable-next-line:only-arrow-function
            conexion.then(async (connection) => {
                const pedidoRepository = connection.getRepository(EPedido);
                const pedidoUpdates = await pedidoRepository.find(
                    { us_telegram: req.params.us_telegram, direccion : null });

                for (const p of pedidoUpdates) {
                    p.direccion = req.body.direccion;
                    await pedidoRepository.save(p);
                }
                res.json(pedidoUpdates);

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




        // Agregar un nuevo pedido
        // req.body has object of type {id: 5, nombre: "banana", precio: "25", descripcion: "Banana de Ecuador"}
        this.express.post("/", (req, res, next) => {
            this.logger.info("url:::::::" + req.url);


            conexion.then(async (connection) => {
                const pedido = new EPedido();

                pedido.estado = req.body.estado;
                pedido.us_telegram = req.body.us_telegram;
/**/

                /**/

                const pedidoRepository = connection.getRepository(EPedido);

                // first we should save a photo
                await pedidoRepository.save(pedido);

                for (const prod of req.body.productos) {
                    const pedidoProducto = new EPedidoProducto();
                    pedidoProducto.pedido = pedido;
                    const productoRepository = connection.getRepository(EProducto);
                    const producto = await productoRepository.findOne({ id: prod.id_producto });
                    pedidoProducto.producto = producto;
                    pedidoProducto.cantidad = prod.cantidad;
                    const pedidoProductoRepository = connection.getRepository(EPedidoProducto);
                    await pedidoProductoRepository.save(pedidoProducto);
                }
                res.json(pedido);
                // tslint:disable-next-line:no-console
            }).catch((error) => console.log(error));
        });
/**/
        // Elimina un  pedido
        this.express.delete("/:id", (req, res, next) => {
            this.logger.info("url:::::::" + req.url);

            conexion.then(async (connection) => {
                const pedidoRepository = connection.getRepository(EPedido);
                const pedidoDelete = await pedidoRepository.findOne({ id: req.params.id });

                const pedidoProductoRepository = connection.getRepository(EPedidoProducto);
                const pedidoProductoDeleteList = await pedidoProductoRepository.find({ pedido: pedidoDelete });

                for (const pedProd of pedidoProductoDeleteList) {
                    await pedidoProductoRepository.remove(pedProd);
                }

                await pedidoRepository.remove(pedidoDelete);
                res.json(pedidoDelete);

                // tslint:disable-next-line:no-console
            }).catch((error) => console.log(error));

        });

    }
}

export default new Pedido().express;
