import listAllCategoriesService from "../../services/categories/listAllCategories.service";

const listAllCategoriesController = async (req, res) => {
  try {
    const categoriesAll = await listAllCategoriesService();

    return res.status(200).json(categoriesAll);
  } catch (err) {
    return res.status(400).json({
      status: "Error",
      message: err.message,
    });
  }
};

export default listAllCategoriesController;
