import database from "../../database";

const createProductService = async (name, price, category_id) => {
  const findCategory = await database.query(
    "SELECT FROM categories WHERE id = $1;",
    [category_id]
  );

  if (!findCategory.rows) {
    throw new Error("Category not found");
  }

  try {
    const res = await database.query(
      "INSERT INTO products(name, price, category_id) VALUES ($1, $2, $3) RETURNING *",
      [name, price, category_id]
    );
    return res.rows[0];
  } catch (err) {
    throw new Error(err);
  }
};

export default createProductService;
