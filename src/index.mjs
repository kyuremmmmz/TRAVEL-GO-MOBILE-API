import express from "express";
import cors from "cors";
import routes from "../routes/crud.mjs";
import { json } from "express";
import { createClient } from "@supabase/supabase-js";
const app = express();
const supabaseUrl = "https://nvscibwjxhrctgfhrgyn.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im52c2NpYndqeGhyY3RnZmhyZ3luIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQyMTI0NDQsImV4cCI6MjAzOTc4ODQ0NH0.PLKN-tw8vMLxgwnunGotYP_U6AM2_A2dN-ATeykj7bI" ;
export const supabase = createClient(supabaseUrl, supabaseKey);
const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => {
    console.log(`LISTENING TO PORT ${PORT}`)
});
app.use(cors());
app.use(json());
app.use(routes);