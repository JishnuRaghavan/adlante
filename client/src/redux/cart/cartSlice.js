import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0
}
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemsToCart(state, action) {
      const newItem = action.payload;
      state.cartItems.push({
        id: newItem.id,
        title: newItem.title,
        price: newItem.price,
        quantity: newItem.quantity,
        image: newItem.image,
        totalPrice: newItem.price * newItem.quantity,
      })

      state.totalQuantity += newItem.quantity;
      state.totalPrice += newItem.price * newItem.quantity;
    },
    deleteItemFromCart(state,action){
      const itemToDeleteId  = action.payload;
      const existingItem  = state.cartItems.find(item=>item.id == itemToDeleteId);

      if(existingItem){
        state.totalQuantity -=  existingItem.quantity;
        state.totalPrice    -=  existingItem.price;
        state.cartItems      =  state.cartItems.filter(item=> item.id !== itemToDeleteId);
      }
    }
  }
})

export const { 
  addItemsToCart,
  deleteItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;