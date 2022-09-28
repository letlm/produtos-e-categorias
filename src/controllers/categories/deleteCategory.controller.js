import deleteCategoryService from "../../services/categories/deleteCategory.service";

const deleteCategoryController = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedCategory = await deleteCategoryService(id);

    return res.status(204).json({
      message: "Category deleted",
      deletedCategory,
    });
  } catch (err) {
    return res.status(400).json({
      status: "Error",
      message: err.message,
    });
  }
};

export default deleteCategoryController;
