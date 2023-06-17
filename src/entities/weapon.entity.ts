import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Category } from "./category.entity";

@Entity()
export class Weapon {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', length: 45, unique: true, nullable: false})
    weapon_name: string;

    @Column({ type: 'decimal', default: 0})
    price: number;

    @Column({type: 'varchar', length: 45, nullable: false})
    range: string;

    @Column({type: 'boolean', default: true})
    availability: boolean;

    @Column({ type: 'decimal', default: 0})
    weight: number

    @ManyToOne(() => Category , (category) => category.weapon)
    category: Category;
}