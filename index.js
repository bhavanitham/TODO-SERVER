import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import connectDB from './database/dbconfig.js'
import { router as authRouter} from './routes/authRoutes.js';
import {router as notesRouter} from './routes/notesRoutes.js'


const app = express();

app.use(express.json());

app.use(cors());

app.use('/api',authRouter,notesRouter)


connectDB(); //DB connector 



app.listen(process.env.PORT,console.log(`Server UP @PORT:${process.env.PORT}`)) //Start server

