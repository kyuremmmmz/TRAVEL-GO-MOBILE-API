import express from 'express';
import { create } from '../controllers/crudController.mjs';
import { signup } from '../controllers/authController.mjs';

const router = express.Router();

router.post('/create', create);
router.post('/signup', signup);
export default router;