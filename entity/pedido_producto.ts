import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { EPedido } from "./pedido";
import { EProducto } from "./producto";

@Entity()
export class EPedidoProducto {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column("integer")
    public pedido: number;

    @Column("integer")
    public producto: number;

    @Column("integer")
    // tslint:disable-next-line:variable-name
    public cantidad: number;
}
