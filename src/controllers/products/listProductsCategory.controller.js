import listProductsCategoryService from "../../services/products/listProductsCategory.service";

const listProductsCategoryController = async (req, res) => {
  const { category_id } = req.params;

  try {
    const productsCategory = await listProductsCategoryService(category_id);

    return res.status(200).json(productsCategory);
  } catch (err) {
    return res.status(400).json({
      status: "Error",
      message: err.message,
    });
  }
};

export default listProductsCategoryController;
