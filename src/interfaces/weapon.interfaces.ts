import { z } from "zod";
import { weaponReqSchema, weaponSchema, weaponSchemaArr } from "../schemas/weapon.schema";

export type TWeapon = z.infer<typeof weaponSchema>;
export type TWeaponArr = z.infer<typeof weaponSchemaArr>;
export type TWeaponReq = z.infer<typeof weaponReqSchema>;