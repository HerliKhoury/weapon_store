import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Weapon } from "./weapon.entity"; 



@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', length: 45, unique: true, nullable: false})
    category_name: string;

    @OneToMany(() => Weapon, (Weapon) => Weapon.category)
    weapon: Weapon[]; 
}