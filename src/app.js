import express from "express";
import { startDatabase } from "./database";
import categoryRouter from "./routes/categories.routes";
import productRouter from "./routes/products.routes";
import "dotenv/config";

const app = express();
app.use(express.json());

app.use("/categories", categoryRouter);
app.use("/products", productRouter);

app.get("/", (req, res) => {
  return res.json({
    message: "Hello World Kenzie",
  });
});
//
app.listen(process.env.PORT || 3333, () => {
  startDatabase();
  console.log("Server running");
});

export default app;
