import { Repository } from "typeorm";
import { TCategory, TCategoryReq } from "../../interfaces/category.interfaces";
import { Category } from "../../entities/category.entity";
import { AppDataSource } from "../../data-source";
import { categorySchema } from "../../schemas/category.schema";

export const createCategoryService = async (
    newCategoryData: TCategoryReq
): Promise<TCategory> => {
    const categoryRepo: Repository<Category> = AppDataSource.getRepository(Category);

    const newCategory: TCategory =  categoryRepo.create(newCategoryData);
    console.log(newCategory)

    const categoryEntity = await categoryRepo.save(newCategory);

    const validCategory: TCategory = categorySchema.parse(categoryEntity);

    return validCategory;
};