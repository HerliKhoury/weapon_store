import { Router } from "express";
import { createWeaponController } from "../controllers/weapon.controller";

export const weaponRoutes: Router = Router();

weaponRoutes.post("", createWeaponController);
weaponRoutes.get("");
weaponRoutes.patch("");
weaponRoutes.delete("");