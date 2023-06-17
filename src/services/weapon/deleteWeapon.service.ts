import { Repository } from "typeorm";
import { Weapon } from "../../entities/weapon.entity";
import { AppDataSource } from "../../data-source";

export const deleteWeaponService = async(weaponId: number): Promise<void> =>{
    const weaponRepo: Repository<Weapon> = AppDataSource.getRepository(Weapon);

    await weaponRepo.delete(weaponId);
};