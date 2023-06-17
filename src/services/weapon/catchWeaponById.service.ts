import { Repository } from "typeorm";
import { Weapon } from "../../entities/weapon.entity";
import { AppDataSource } from "../../data-source";
import { TWeapon } from "../../interfaces/weapon.interfaces";

export const catchWeaponByIdService = async (
    weaponId: number
): Promise<TWeapon> => {
    const weaponRepo: Repository<Weapon> = AppDataSource.getRepository(Weapon);

    const weapon: TWeapon | null = await weaponRepo.findOneBy({
        id: weaponId
    });

    return weapon!
};