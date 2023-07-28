import { createSlice } from '@reduxjs/toolkit';

const initialState = [];
const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add(state, action) {
      const product = action.payload;
      const exists = state.some((p) => p.id === product.id);
      if (!exists) {
        state.push(product);
      }
    },
    remove(state, action) {
      return state.filter((p) => p.id != action.payload);
    },
  },
});

export const { add, remove } = CartSlice.actions;
export default CartSlice.reducer;
