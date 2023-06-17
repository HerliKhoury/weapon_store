import { z } from "zod";

export const weaponSchema = z.object({
    id: z.number(),
    weapon_name: z.string().max(45).nonempty(),
    price:z.number(),
    range: z.string().max(45).nonempty(),
    availability: z.boolean(),
    weight: z.number()
});

export const weaponSchemaArr = z.array(weaponSchema);

export const weaponReqSchema = weaponSchema.omit({ id: true});