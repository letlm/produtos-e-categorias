import database from "../../database";

const updateProductService = async (id, name, price, category_id) => {
  try {
    const findProduct = await database.query(
      "SELECT * FROM products WHERE id = $1;",
      [id]
    );

    if (!findProduct.rowCount) {
      throw new Error("Product not found!");
    }

    const [product] = findProduct.rows;

    if (name) {
      product.name = name;
    }

    if (price) {
      product.price = price;
    }

    if (category_id) {
      product.category_id = category_id;
    }

    const res = await database.query(
      "UPDATE products SET name = $1, price = $2, category_id = $3 WHERE id = $4 RETURNING *;",
      [product.name, product.price, product.category_id, id]
    );

    return { message: "Product updated", product: res.rows[0] };
  } catch (err) {
    throw new Error(err);
  }
};

export default updateProductService;
