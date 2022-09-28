import database from "../../database";

const listCategoryService = async (id) => {
  try {
    const res = await database.query(
      "SELECT * FROM categories WHERE id = $1;",
      [id]
    );

    if (!res.rowCount) {
      throw "Id não corresponde a nenhuma categoria";
    }

    return res.rows[0];
  } catch (err) {
    throw new Error(err);
  }
};

export default listCategoryService;
