import { Router } from "express";
import { listAllCategoriesControler } from "../controllers/category.controllers";

export const categoriesRoutes: Router = Router();

categoriesRoutes.get("", listAllCategoriesControler);