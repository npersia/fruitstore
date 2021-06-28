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

    // @Column("integer")
    @ManyToOne(() => ECliente)
    public cliente: ECliente;

    @Column("varchar")
    public estado: string;
}
/**/
