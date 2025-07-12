import jwt from 'jsonwebtoken';
import { errorHandler } from './error.js';

export const verifyToken  = (req,res,next)=>{
  const token = req.cookies.access_token;
  if(!token){
    console.log('there is no token')
    return next(errorHandler(401,'You are not authenticated'));
  }

  console.log('token is here')
  jwt.verify(token,process.env.JWT_SECRET,(err,user)=>{
    if(err){
      return next(errorHandler(403,'Token is not valid'));
    }
    console.log('token verified');
    req.user  = user;
    next();
  })
}