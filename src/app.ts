import  Express  from "express";
import { categoriesRoutes } from "./routes/category.routes";
import { weaponRoutes } from "./routes/weapon.routes";

const app = Express();
app.use(Express.json());

app.use("/category", categoriesRoutes);
app.use("/weapon", weaponRoutes)

export default app;