import mongoose,{mongo} from "mongoose";

const cartSchema  = new mongoose.Schema({
  id:{
    type:String,
    required:true,
    unique:true
  },
  title:{
    type:String,
    required:true
  },
  price:{
    type:Number,
    required:true
  },
  quantity:{
    type:Number,
    required:true
  },
  image:{
    type:String,
    required:true
  },
  totalPrice:{
    type:Number,
    required:true
  }
},{timestamps:true});

const Cart  = mongoose.model('Cart',cartSchema);
export default Cart;