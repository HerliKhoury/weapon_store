import { Repository } from "typeorm";
import { Weapon } from "../../entities/weapon.entity";
import { AppDataSource } from "../../data-source";
import { TWeapon, TWeaponUpdate } from "../../interfaces/weapon.interfaces";
import { weaponSchema } from "../../schemas/weapon.schema";

export const updateWeaponByIdService = async (
    weaponId: number,
    weaponData: TWeaponUpdate
):Promise<TWeapon> => {
    const weaponRepo: Repository<Weapon> = AppDataSource.getRepository(Weapon);

    const oldWeapon: TWeapon | null = await weaponRepo.findOneBy({
        id: weaponId
    });

    const newWeaponData: TWeapon = weaponRepo.create({
        ...oldWeapon,
        ...weaponData
    })

    await weaponRepo.save(newWeaponData);

    const updatedWeapon: TWeapon = weaponSchema.parse(newWeaponData);

    return updatedWeapon;
};