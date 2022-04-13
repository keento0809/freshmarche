const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      const addingProduct = action.payload;
      console.log(addingProduct);
      const updatedTotalQuantity = state.totalQuantity + addingProduct.quantity;
      // original code. DO NOT Delete
      // const updatedTotalPrice =
      //   state.totalPrice + addingProduct.quantity * addingProduct.price;
      const updatedTotalPrice =
        Math.floor(
          (state.totalPrice + addingProduct.quantity * addingProduct.price) *
            100
        ) / 100;
      console.log(updatedTotalPrice);
      // state.totalPrice + addingProduct.quantity * addingProduct.price;
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
        // original code. Do Not Delete!
        // sample.subTotalPrice += action.payload.subTotalPrice;
        sample.subTotalPrice +=
          Math.floor(action.payload.subTotalPrice * 100) / 100;
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
    // temporary !!
    case "REMOVE": {
      const removingProductId = action.payload;
      const removingProduct = state.cartProducts.find(
        (product) => product.id === removingProductId
      );
      const updateTotalQuantity =
        state.totalQuantity - removingProduct.quantity;
      const updatedTotalPrice =
        state.totalPrice - removingProduct.price * removingProduct.quantity;
      const updateCartProducts = state.cartProducts.filter(
        (product) => product.id !== removingProductId
      );
      return {
        cartProducts: updateCartProducts,
        totalQuantity: updateTotalQuantity,
        totalPrice: updatedTotalPrice,
      };
    }
  }
};

export default CartReducer;
