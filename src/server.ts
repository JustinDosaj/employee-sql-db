import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import "./db";
import employeeRoutes from './routes/employee.routes';


dotenv.config()
const app: Application = express();

app.use(express.json())
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.SERVER_PORT || 5000;

app.get('/', (req: Request, res: Response) => {
    res.send("Backend is running!")
})

app.get('/employees', employeeRoutes)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));