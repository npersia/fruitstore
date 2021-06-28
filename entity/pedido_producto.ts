import {Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";
import {ECliente} from "./cliente";
import { EPedido } from "./pedido";
import { EProducto } from "./producto";

@Entity()
export class EPedidoProducto {
    @PrimaryGeneratedColumn()
    public id: number;

    @ManyToOne(() => EPedido)
    public pedido: EPedido;

    @ManyToOne(() => EProducto)
    public producto: EProducto;

    @Column("integer")
    // tslint:disable-next-line:variable-name
    public cantidad: number;
}
