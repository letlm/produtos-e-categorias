import updateProductService from "../../services/products/updateProduct.service";

const updateProductController = async (req, res) => {
  const { id } = req.params;

  const { name, price, category_id } = req.body;

  try {
    const updateProduct = await updateProductService(
      id,
      name,
      price,
      category_id
    );

    return res.status(200).json(updateProduct);
  } catch (err) {
    return res.status(400).json({
      status: "Error",
      message: err.message,
    });
  }
};

export default updateProductController;
