const FavoriteReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      const addingProduct = action.payload;
      const isExisting = state.listProducts.find(
        (product) => product.id === addingProduct.id
      );

      const updatedListProduct =
        isExisting === undefined
          ? [...state.listProducts, action.payload]
          : state.listProducts;
      const updatedTotalQuantity =
        isExisting === undefined
          ? state.totalQuantity + 1
          : state.totalQuantity;
      return {
        listProducts: updatedListProduct,
        totalQuantity: updatedTotalQuantity,
      };
    }
    case "REMOVE": {
      const removingProductId = action.payload;
      const changedListProducts = state.listProducts.filter(
        (product) => product.id !== removingProductId
      );

      const changedTotalQuantity =
        state.totalQuantity === 0
          ? state.totalQuantity
          : state.totalQuantity - 1;
      console.log(changedTotalQuantity);

      return {
        listProducts: changedListProducts,
        totalQuantity: changedTotalQuantity,
      };
    }
  }
};

export default FavoriteReducer;
