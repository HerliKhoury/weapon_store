import { AppDataSource } from "../../data-source";
import { Category } from "../../entities/category.entity";
import { TCategoryArr } from "../../interfaces/category.interfaces";
import { Repository } from "typeorm";
import { categorySchemaArr } from "../../schemas/category.schema";

export const listCategoriesService = async (): Promise<TCategoryArr> => {
    const categoryRepo: Repository<Category> = AppDataSource.getRepository(Category);

    const categories: TCategoryArr | null = await categoryRepo.find();

    const categorieIsValid: TCategoryArr = categorySchemaArr.parse(categories);

    return categorieIsValid;
}