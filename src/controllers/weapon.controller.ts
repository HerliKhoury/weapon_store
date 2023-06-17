import { Request, Response, query } from "express";
import { TWeapon, TWeaponArr, TWeaponReq } from "../interfaces/weapon.interfaces";
import { createWeaponService } from "../services/weapon/createWeapon.service";
import { listWeaponsService } from "../services/weapon/listWeapons.service";
import { deleteWeaponService } from "../services/weapon/deleteWeapon.service";
import { catchWeaponByIdService } from "../services/weapon/catchWeaponById.service";

export const createWeaponController = async(
    req: Request,
    res: Response
): Promise<Response> => {
    const productData:TWeaponReq = req.body;

    const newProduct:TWeapon = await createWeaponService(productData);

    return res.status(201).json(newProduct);
};

export const listAllWeaponsControler = async(
    req: Request,
    res: Response
): Promise<Response> => {
    
    const categoryList: TWeaponArr = await listWeaponsService();

    return res.status(200).json(categoryList);
};

export const deleteWeaponController = async (
    req: Request,
    res: Response
):Promise<Response> => {
    const weaponId: number = parseInt(req.params.id);

    await deleteWeaponService(weaponId);

    return res.status(204).send();
};

export const catchWeaponByIdController = async(
    req: Request,
    res: Response
): Promise<Response> => {
    const weaponId: number = parseInt(req.params.id);

    const weaponFound: TWeapon = await catchWeaponByIdService(weaponId);

    return res.status(200).json(weaponFound);
};