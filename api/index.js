import express from 'express';
import mongoose, { mongo } from 'mongoose';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser';

mongoose.connect(process.env.MONGO)
  .then(()=>{
    console.log('Connected to the MongoDB');
  })
  .catch((err)=>{
    console.log(err);
  });

const app = express();

app.use(express.json());

app.use(cookieParser());

app.listen(3000,()=>{
  console.log('server started on port 3000...')
})

app.use("/api/user",userRoutes);
app.use("/api/auth",authRoutes);

app.use((err,req,res,next)=>{
  const statusCode  = err.statusCode  || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success:false,
    message,
    statusCode,
  })
})