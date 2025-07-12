import mongoose from "mongoose";
import Cart from "../models/cart.model.js";

export const getCart  = async (req,res,next)=>  {
  try {
    const cart  = await Cart.findOne({userId:req.user.id});

    if(!cart) return res.status(200).json({items:[]});
    res.status(200).json(cart);
  } catch (error) {
    next(error);
  }
}

export const addToCart  = async (req,res,next)=>{
  const {productId,quantity}  = req.body;
  console.log('cart controller started');
  let cart  = await Cart.findOne({userId:req.user.id});

  if(cart)  {
    const itemIndex = cart.items.findIndex((item)=> item.productId.toString() === productId);
    
    if(itemIndex > -1)  {
      cart.items[itemIndex].quantity  +=  quantity;
    } else  {
      cart.items.push({productId,quantity});
    }
    await cart.save();
  } else {
    cart  = new Cart({
      userId: req.user.id,
      items:[{productId,quantity}]
    });
    await cart.save();
  }
  res.status(200).json(cart);
}