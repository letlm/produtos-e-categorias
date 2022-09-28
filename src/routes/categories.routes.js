import { Router } from "express";
import createCategoryController from "../controllers/categories/createCategorie.controller";
import deleteCategoryController from "../controllers/categories/deleteCategory.controller";
import listAllCategoriesController from "../controllers/categories/listAllCategories.controller";
import listCategoryController from "../controllers/categories/listCategory.controller";
import updateCategoryController from "../controllers/categories/updateCategory.controller";

const categoryRouter = Router();

categoryRouter.post("", createCategoryController);
categoryRouter.get("", listAllCategoriesController);
categoryRouter.get("/:id", listCategoryController);
categoryRouter.patch("/:id", updateCategoryController);
categoryRouter.delete("/:id", deleteCategoryController);

export default categoryRouter;
