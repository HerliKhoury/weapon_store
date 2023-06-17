import { Repository } from "typeorm";
import { TWeapon, TWeaponReq } from "../../interfaces/weapon.interfaces";
import { Weapon } from "../../entities/weapon.entity";
import { AppDataSource } from "../../data-source";
import { weaponSchema } from "../../schemas/weapon.schema";

export const createWeaponService = async (
    weaponData: TWeaponReq
):Promise<TWeapon> => {
    const weaponRepo: Repository<Weapon> = AppDataSource.getRepository(Weapon);

    const newWeapon: TWeapon = weaponRepo.create(weaponData);
    const weaponEntity = await weaponRepo.save(newWeapon);
    weaponEntity.price = Number(weaponEntity.price);
    weaponEntity.weight = Number(weaponEntity.weight);
    const validWeapon: TWeapon = weaponSchema.parse(weaponEntity);
    return validWeapon;
};