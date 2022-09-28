import deleteProductService from "../../services/products/deleteProduct.service";

const deleteProductController = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedCategory = await deleteProductService(id);

    return res.status(204).json({
      message: "Product deleted",
      deletedCategory,
    });
  } catch (err) {
    return res.status(400).json({
      status: "Error",
      message: err.message,
    });
  }
};

export default deleteProductController;
