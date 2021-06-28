import { Column, Entity, PrimaryColumn, OneToMany } from "typeorm";
import {EPedido} from "./pedido";

@Entity()
export class ECliente {

    @PrimaryColumn("integer")
    public id: number;

    @Column("varchar")
    public nombre: string;

    @Column("varchar")
    // tslint:disable-next-line:variable-name
    public us_telegram: string;

    @Column("varchar")
    public direccion: string;

    @Column("varchar")
    public mail: string;
}
/**/
