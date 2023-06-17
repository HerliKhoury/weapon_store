import { Router } from "express";
import { createCategoryControler, listAllCategoriesControler } from "../controllers/category.controllers";

export const categoriesRoutes: Router = Router();

categoriesRoutes.get("", listAllCategoriesControler);
categoriesRoutes.post("", createCategoryControler);