import { Request, Response } from "express";
import { listCategoriesService } from "../services/category/listCategories.service";
import { TCategory, TCategoryArr, TCategoryReq } from "../interfaces/category.interfaces";
import { createCategoryService } from "../services/category/createCategory.service";

export const listAllCategoriesControler = async(
    req: Request,
    res: Response
): Promise<Response> => {
    
    const categoryList: TCategoryArr = await listCategoriesService();

    return res.status(200).json(categoryList);
};

export const createCategoryControler = async(
    req: Request,
    res: Response
): Promise<Response> => {
    const newCategoryData: TCategoryReq = req.body;

    const newCategory: TCategory =  await createCategoryService(newCategoryData);

    return res.status(201).json(newCategory);
};