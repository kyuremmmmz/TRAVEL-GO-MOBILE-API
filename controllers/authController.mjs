import e from "express";
import { json } from "express";
import { supabase } from "../src/index.mjs";

const  app  = e();

app.use(json())
export const signup = async (req, res) =>  {
    const {email, password} = req.body;

    const {data, error} = await supabase.auth.signUp({email, password});

    if (error) {
        res.status(400).json({
            error: error.message
        });
    }
    return res.status(400).json({
        message : "data inserted successfully check your email",
        user : data.user
    })
}