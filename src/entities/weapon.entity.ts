import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Category } from "./category.entity";

@Entity("weapon")
export class Weapon {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({type: 'varchar', length: 45, unique: true, nullable: false})
    weapon_name: string;

    @Column({ type: 'decimal', precision: 7, scale: 2 , default: 0})
    price: number;

    @Column({type: 'varchar', length: 45, unique: true, nullable: false})
    range: string;

    @Column({type: 'boolean', default: true})
    availability: boolean;

    @Column({ type: 'decimal', precision: 3, scale: 2 , default: 0})
    weight: number

    /* @ManyToOne(() => Category , (category) => category.weapon)
    category: Category; */

}