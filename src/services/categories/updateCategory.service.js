import database from "../../database";

const updateCategoryService = async (id, name) => {
  try {
    const res = await database.query(
      "UPDATE categories SET name = $1 WHERE id = $2 RETURNING *;",
      [name, id]
    );
    if (!res.rowCount) {
      throw "Id não corresponde a nenhuma categoria";
    }
    return { message: "Categoria atualizada", category: res.rows[0] };
  } catch (err) {
    throw new Error(err);
  }
};

export default updateCategoryService;
