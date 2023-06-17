import { Router } from "express";
import { catchWeaponByIdController, createWeaponController, deleteWeaponController, listAllWeaponsControler, updateWeaponByIdController } from "../controllers/weapon.controller";

export const weaponRoutes: Router = Router();

weaponRoutes.post("", createWeaponController);
weaponRoutes.get("", listAllWeaponsControler);
weaponRoutes.get("/:id", catchWeaponByIdController);
weaponRoutes.patch("/:id", updateWeaponByIdController);
weaponRoutes.delete("/:id", deleteWeaponController);