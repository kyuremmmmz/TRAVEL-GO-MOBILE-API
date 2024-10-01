import express from "express";
import cors from "cors";
import routes from "../routes/crud.mjs";
import { json } from "express";
const app = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`LISTENING TO PORT ${PORT}`)
});
app.use(cors());
app.use(json());
app.use(routes);