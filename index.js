import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import db from './config/Database.js';
import cors from 'cors';
import router from './routes/index.js';
dotenv.config();
const app = express();

try {
    await db.authenticate();
} catch (error) {
    console.log(error)
}

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(5000, () => console.log('Server is running at port 5000'));