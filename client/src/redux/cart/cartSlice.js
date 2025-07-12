import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0
}

export const addToCartDB  = createAsyncThunk(
  'cart/addToCartDB',
  async (cartItem)  =>  {
    console.log('add to cart in slice executed')
    const res = await fetch('/api/cart/addToCart',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(cartItem),
      credentials:'include',
    });
    console.log(res)
    return res.json();
  }
)

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemsToCart(state, action) {
      const newItem = action.payload;
      const existingItem  = state.cartItems.find(item=>item.id == newItem.id);
      if(existingItem){
        existingItem.quantity +=  newItem.quantity;
        existingItem.totalPrice =  existingItem.quantity*newItem.price;
      }
      else{

        state.cartItems.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          quantity: newItem.quantity,
          image: newItem.image,
          totalPrice: newItem.price * newItem.quantity,
        })
      }

      state.totalQuantity += newItem.quantity;
      state.totalPrice += newItem.price * newItem.quantity;
    },
    deleteItemFromCart(state,action){
      const itemToDeleteId  = action.payload;
      const existingItem  = state.cartItems.find(item=>item.id == itemToDeleteId);

      if(existingItem){
        state.totalQuantity -=  existingItem.quantity;
        state.totalPrice    -=  existingItem.quantity*existingItem.price;
        state.cartItems      =  state.cartItems.filter(item=> item.id !== itemToDeleteId);
      }
    },
    increaseCartItem(state,action){
      const itemToIncrease  = action.payload;
      const existingItem  = state.cartItems.find(item=>item.id  === itemToIncrease);
      if(existingItem){
        existingItem.quantity++;
        existingItem.totalPrice += existingItem.price;
        state.totalQuantity++;
        state.totalPrice  +=  existingItem.price;
      }
    },
    decreaseCartItem(state,action){
      const itemToDecrease  = action.payload;
      const existingItem    = state.cartItems.find(item=>item.id  === itemToDecrease);
      if(existingItem && existingItem.quantity !== 1){
        existingItem.quantity--;
        existingItem.totalPrice -=  existingItem.price;
        state.totalQuantity--;
        state.totalPrice  -=  existingItem.price;
      }
    }
  }
})

export const { 
  addItemsToCart,
  deleteItemFromCart,increaseCartItem,decreaseCartItem } = cartSlice.actions;
export default cartSlice.reducer;