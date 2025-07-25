import mongoose,{mongo} from "mongoose";

const cartSchema  = new mongoose.Schema({
  userId:{
    type:mongoose.Schema.Types.ObjectId,
    required:true,
    ref:'User',
    unique:true
  },
  items:[
    {
      productId:{
        type:String,
        required:true,
        ref:'Product'
      },
      quantity:{
        type:Number,
        required:true,
        default:1
      }
    }
  ]
},{timestamps:true});

const Cart  = mongoose.model('Cart',cartSchema);
export default Cart;