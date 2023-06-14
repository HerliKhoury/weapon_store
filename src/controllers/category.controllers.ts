import { Request, Response } from "express";
import { listCategoriesService } from "../services/category/listCategories.service";
import { TCategoryArr } from "../interfaces/category.interfaces";

export const listAllCategoriesControler = async(
    req: Request,
    res: Response
): Promise<Response> => {
    
    const categoryList: TCategoryArr = await listCategoriesService();

    return res.status(200).json(categoryList);
};