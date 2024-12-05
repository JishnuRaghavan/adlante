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
    }
  }
})

export const { addItemsToCart } = cartSlice.actions;
export default cartSlice.reducer;