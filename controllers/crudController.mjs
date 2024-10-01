// src/controllers/crudController.mjs
import express from "express";
import { json } from "express";
const app = express();
let incerement = 0;
let data = [];
app.use(json());
app.use(express.urlencoded({ extended: true }));
export const create = (req, res) => {
    if (!req.body || !req.body.name) {
        return res.status(400).json({ error: "Invalid input or missing 'name' field" });
    }

    const pushhh = {
        id: incerement++,
        name: "Christian"
    };

    const response = data.push(pushhh);
    console.log(req.body);
    
    return res.status(201).json(pushhh);
};