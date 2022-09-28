import listAllProductsService from "../../services/products/listAllProducts.service";

const listAllProductsController = async (req, res) => {
  try {
    const productsAll = await listAllProductsService();

    return res.status(200).json(productsAll);
  } catch (err) {
    return res.status(400).json({
      status: "Error",
      message: err.message,
    });
  }
};

export default listAllProductsController;
