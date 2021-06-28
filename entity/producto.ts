import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class EProducto {

    @PrimaryColumn("integer")
    public id: number;

    @Column("varchar")
    public nombre: string;

    @Column("real")
    public precio: number;

    @Column("varchar")
    public descripcion: string;
}
