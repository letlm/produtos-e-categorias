import database from "../../database";

const listProductService = async (id) => {
  try {
    const res = await database.query("SELECT * FROM products WHERE id = $1;", [
      id,
    ]);

    if (!res.rowCount) {
      throw "id não corresponde a nenhum produto";
    }

    return res.rows[0];
  } catch (err) {
    throw new Error(err);
  }
};

export default listProductService;
