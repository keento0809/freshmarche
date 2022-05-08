import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    listProducts: [],
    totalQuantity: 0,
  },
  reducers: {
    AddToFavoriteList(state, action) {
      state.totalQuantity++;
      state.listProducts.push(action.payload);
    },
    RemoveFromFavoriteList(state, action) {
      state.totalQuantity--;
      const removingProductId = action.payload;
      state.listProducts = state.listProducts.filter(
        (product) => product.id !== removingProductId
      );
    },
  },
});

export const favoriteAction = favoriteSlice.actions;

export default favoriteSlice;
