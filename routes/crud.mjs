import express from 'express';
import { create } from '../controllers/crudController.mjs';


const router = express.Router();

router.post('/create', create);

export default router;