import "reflect-metadata";
import { createConnection } from "typeorm";
import { ECliente } from "./cliente";
import { EPedido } from "./pedido";
import {EPedidoProducto} from "./pedido_producto";
import { EProducto } from "./producto";

export let conexion = createConnection({
    type: "postgres",
    // tslint:disable-next-line:object-literal-sort-keys
    host: "postgres",
    port: 5432,
    username: "postgres",
    password: "mypassword",
    database: "postgres",
    entities: [
        ECliente, EPedido, EProducto, EPedidoProducto],
    synchronize: true,
    logging: false});
// export let conexion = createConnection({
//     type: "postgres",
//     // tslint:disable-next-line:object-literal-sort-keys
//     host: "postgres",
//     port: 5432,
//     username: "postgres",
//     password: "mypassword",
//     database: "postgres",
//     entities: [
//         ECliente, EPedido, EProducto],
//     synchronize: true,
//     logging: false}).then((connection) => {
//     // here you can start to work with your entities
// // tslint:disable-next-line:no-console
// }).catch((error) => console.log(error));
/**/
