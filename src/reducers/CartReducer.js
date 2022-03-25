const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      const addingProduct = action.payload;
      console.log(addingProduct);
      const updatedTotalQuantity = state.totalQuantity + addingProduct.quantity;
      const updatedTotalPrice =
        state.totalPrice + addingProduct.quantity * addingProduct.price;
      const updatedCartProducts = state.cartProducts.find(
        (product) => product.id === addingProduct.id
      )
        ? [...state.cartProducts]
        : [...state.cartProducts, addingProduct];

      // I need refactoring!!
      let sample;
      if (
        state.cartProducts.find((product) => product.id === addingProduct.id)
      ) {
        sample = state.cartProducts.find(
          (product) => product.id === addingProduct.id
        );
        sample.quantity += action.payload.quantity;
        sample.subTotalPrice += action.payload.subTotalPrice;
      }

      return {
        cartProducts: updatedCartProducts,
        totalQuantity: updatedTotalQuantity,
        totalPrice: updatedTotalPrice,
      };
    }
    case "REMOVE": {
      console.log(action.payload);
      return state;
    }
  }
};

export default CartReducer;
