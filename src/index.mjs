import express from "express";
import cors from "cors";
import routes from "../routes/crud.mjs";
import { json } from "express";
import { createClient } from "@supabase/supabase-js";
const app = express();
require('dotenv').config;
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY ;
const supabase = createClient(supabaseUrl, supabaseKey);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`LISTENING TO PORT ${PORT}`)
});
app.use(cors());
app.use(json());
app.use(routes);