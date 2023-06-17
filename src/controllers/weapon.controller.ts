import { Request, Response } from "express";
import { TWeapon, TWeaponArr, TWeaponReq } from "../interfaces/weapon.interfaces";
import { createWeaponService } from "../services/weapon/createWeapon.service";
import { listWeaponsService } from "../services/weapon/listWeapons.service";

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