import {Router} from 'express'
import  {registerUser,loginUser}  from '../controllers/authController.js';
import { authMiddleware } from '../middlewares/authMiddlewares.js';

export const router = Router();

router.post('/register',registerUser);
router.post('/login',loginUser);


