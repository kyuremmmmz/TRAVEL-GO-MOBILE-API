import express from 'express';
import { create } from '../controllers/crudController.mjs';
import { signIn, signup } from '../controllers/authController.mjs';

const router = express.Router();

router.post('/create', create);
router.post('/signup', signup);
router.post('/login', signIn);
export default router;