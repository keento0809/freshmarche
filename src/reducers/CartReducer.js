const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      const addingProduct = action.payload;
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
        console.log(sample);
      }

      return {
        cartProducts: updatedCartProducts,
        totalQuantity: updatedTotalQuantity,
        totalPrice: updatedTotalPrice,
      };
    }
    case "SUBTRACT": {
      const subtractingProductId = action.payload.id;
      const subtractingProduct = state.cartProducts.find(
        (product) => product.id === subtractingProductId
      );
      const newTotalQuantity = state.totalQuantity - 1;
      const newTotalPrice = state.totalPrice - subtractingProduct.price;

      subtractingProduct.quantity--;
      subtractingProduct.subTotalPrice -= subtractingProduct.price;
      const newCartProducts =
        subtractingProduct.quantity === 0
          ? state.cartProducts.filter(
              (product) => product.id !== subtractingProductId
            )
          : [...state.cartProducts];
      return {
        cartProducts: newCartProducts,
        totalQuantity: newTotalQuantity,
        totalPrice: newTotalPrice,
      };
    }
    case "REMOVE": {
      console.log(action.payload);
      return state;
    }
  }
};

export default CartReducer;