import { createSlice } from '@reduxjs/toolkit';
interface IProduct {
  status: boolean;
  priceRange: number;
}
const initialState: IProduct = {
  status: false,
  priceRange: 150,
};
const productsSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    toggleStatus: (state) => {
      state.status = !state.status;
    },
    setPriceRange: (state, action: payloadAction<number>) => {
      state.priceRange = action.payload;
    },
  },
});

export const { toggleStatus, setPriceRange } = productsSlice.actions;
export default productsSlice.reducer;
