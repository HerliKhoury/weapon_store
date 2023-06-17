import { Request, Response } from "express";
import { TWeapon, TWeaponReq } from "../interfaces/weapon.interfaces";
import { createWeaponService } from "../services/weapon/createWeapon.service";

export const createWeaponController = async(
    req: Request,
    res: Response
): Promise<Response> => {
    const productData:TWeaponReq = req.body;

    const newProduct:TWeapon = await createWeaponService(productData);

    return res.status(201).json(newProduct);
};