import database from "../../database";

const deleteProductService = async (id) => {
  try {
    const res = await database.query(
      "DELETE FROM products WHERE id = $1 RETURNING *;",
      [id]
    );

    if (!res.rowCount) {
      throw "Id não corresponde a nenhum produto";
    }

    return "Product deleted";
  } catch (err) {
    throw new Error(err);
  }
};

export default deleteProductService;
