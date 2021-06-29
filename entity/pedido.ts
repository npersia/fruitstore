import {
    Column,
    Entity,
    JoinColumn,
    JoinTable,
    ManyToMany,
    ManyToOne,
    PrimaryColumn,
    PrimaryGeneratedColumn
} from "typeorm";
import {ECliente} from "./cliente";
import {EPedidoProducto} from "./pedido_producto";
import {EProducto} from "./producto";

@Entity()
export class EPedido {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column("real", {nullable: true })
    public precio: number;

    @Column("varchar", {nullable: true })
    // tslint:disable-next-line:variable-name
    public us_telegram: string;

    @Column("varchar", {nullable: true })
    public direccion: string;

    @Column("varchar")
    public estado: string;
}
/**/
