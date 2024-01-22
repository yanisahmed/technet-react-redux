import { IProduct } from '@/types/globalTypes';
import { createSlice } from '@reduxjs/toolkit';

interface ICart {
  products: IProduct[];
}
const initialState: ICart = {
  products: [],
};

export const cardSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: payloadAction<IProduct>) => {
      state.products.push(action.payload);
    },
  },
});
export const { addToCart } = cardSlice.actions;
export default cardSlice.reducer;
