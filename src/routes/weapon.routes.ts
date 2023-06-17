import { Router } from "express";
import { createWeaponController, listAllWeaponsControler } from "../controllers/weapon.controller";

export const weaponRoutes: Router = Router();

weaponRoutes.post("", createWeaponController);
weaponRoutes.get("", listAllWeaponsControler);
weaponRoutes.get("/:id", );
weaponRoutes.patch("",);
weaponRoutes.delete("",);