import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Weapon } from "../../entities/weapon.entity";
import { TWeaponArr } from "../../interfaces/weapon.interfaces";
import { weaponSchemaArr } from "../../schemas/weapon.schema";

export const listWeaponsService = async (): Promise<TWeaponArr> => {
    const weaponRepo: Repository<Weapon> = AppDataSource.getRepository(Weapon);

    const weapons: TWeaponArr | null = await weaponRepo.find();

    const weaponIsValid: TWeaponArr = weaponSchemaArr.parse(weapons);

    return weaponIsValid;
}