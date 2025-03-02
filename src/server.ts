import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import "./db";
import employeeRoutes from './routes/employees.routes';
import salaryRoutes from './routes/salaries.routes';
import titleRoutes from './routes/titles.routes';
import departmentRouter from './routes/departments.routes';


dotenv.config()
export const app: Application = express();

app.use(express.json())
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.SERVER_PORT || 5000;

app.get('/', (req: Request, res: Response) => {
    res.send("Backend is running!")
})

app.use('/employees', employeeRoutes)
app.use('/salaries', salaryRoutes)
app.use('/titles', titleRoutes)
app.use('/departments', departmentRouter)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));