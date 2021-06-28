import {Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryColumn} from "typeorm";
import {ECliente} from "./cliente";
import {EProducto} from "./producto";
import {EPedidoProducto} from "./pedido_producto";


@Entity()
export class EPedido {

    @PrimaryColumn("integer")
    public id: number;

    @Column("real")
    public precio: number;

    @Column("integer")
    public cliente: number;

    @Column("varchar")
    public estado: string;
}
/**/
