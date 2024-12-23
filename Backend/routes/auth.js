import express from 'express';
import cors from 'cors'; 
import { login, register } from '../contollers/authController.js';

const app = express();


app.use(cors());

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

export default router;
