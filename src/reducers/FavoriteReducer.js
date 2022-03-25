const FavoriteReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      const addingProduct = action.payload;
      const isExisting = state.listProducts.find(
        (product) => product.id === addingProduct.id
      );

      let updatedListProduct;
      let updatedTotalQuantity;

      if (isExisting === undefined) {
        updatedListProduct = [...state.listProducts, action.payload];
        updatedTotalQuantity = state.totalQuantity + 1;
      } else {
        alert("You've already added this to your favorite lists.");
        updatedListProduct = state.listProducts;
        updatedTotalQuantity = state.totalQuantity;
      }
      console.log(updatedListProduct);
      return {
        listProducts: updatedListProduct,
        totalQuantity: updatedTotalQuantity,
      };
    }
    case "REMOVE": {
      console.log("Removing the product that you chose.");
      return state;
    }
  }
};

export default FavoriteReducer;
