import createCategoryService from "../../services/categories/createCategory.service";

const createCategoryController = async (req, res) => {
  const { name } = req.body;

  try {
    const category = await createCategoryService(name);

    return res.status(201).json({
      message: "Category created",
      category,
    });
  } catch (err) {
    return res.status(400).json({
      status: "Error",
      message: err.message,
    });
  }
};

export default createCategoryController;
