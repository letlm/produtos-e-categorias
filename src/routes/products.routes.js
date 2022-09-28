import { Router } from "express";
import createProductController from "../controllers/products/createProduct.controller";
import deleteProductController from "../controllers/products/deleteProduct.controller";
import listAllProductsController from "../controllers/products/listAllProducts.controller";
import listProductController from "../controllers/products/listProduct.controller";
import listProductsCategoryController from "../controllers/products/listProductsCategory.controller";
import updateProductController from "../controllers/products/updateProduct.controller";

const productRouter = Router();

productRouter.post("", createProductController);
productRouter.get("", listAllProductsController);
productRouter.get("/:id", listProductController);
productRouter.patch("/:id", updateProductController);
productRouter.get("/category/:category_id", listProductsCategoryController);
productRouter.delete("/:id", deleteProductController);

export default productRouter;
