import { addNotes, deleteNotes, getNotes } from "../controllers/notesController.js";
import {Router} from 'express'
import { authMiddleware } from "../middlewares/authMiddlewares.js";

export const router = Router();

router.get('/notes',authMiddleware ,getNotes);
router.post('/notes',authMiddleware ,addNotes);
router.delete('/notes/:id',authMiddleware, deleteNotes);

