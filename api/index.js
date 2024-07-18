import express from 'express';
import mongoose, { mongo } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.MONGO)
  .then(()=>{
    console.log('Connected to the MongoDB');
  })
  .catch((err)=>{
    console.log(err);
  });

const app = express();

app.listen(3000,()=>{
  console.log('server started on port 3000...')
})