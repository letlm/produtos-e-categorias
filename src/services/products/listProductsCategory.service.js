import database from "../../database";

const listProductsCategoryService = async (category_id) => {
  try {
    const res = await database.query(
      "SELECT p.name, p.price category FROM products p INNER JOIN categories c ON c.id = p.category_id WHERE p.category_id = $1;",
      [category_id]
    );
    return res.rows;
  } catch (err) {
    throw new Error(err);
  }
};

export default listProductsCategoryService;
