import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Weapon } from "./weapon.entity"; 



@Entity("category")
export class Category {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({type: 'varchar', length: 45, unique: true, nullable: false})
    category_name: string;

    @OneToMany(() => Weapon, (Weapon) => Weapon.category)
    weapon: Weapon[]; 
}