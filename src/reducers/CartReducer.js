const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      const addingProduct = action.payload;
      const updatedTotalQuantity = state.totalQuantity + addingProduct.quantity;
      // original code. DO NOT Delete
      // const updatedTotalPrice =
      //   state.totalPrice + addingProduct.quantity * addingProduct.price;
      const updatedTotalPrice =
        Math.floor(
          (state.totalPrice + addingProduct.quantity * addingProduct.price) *
            100
        ) / 100;
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
      // test
      const newTotalPrice =
        Math.floor((state.totalPrice - subtractingProduct.price) * 100) / 100;

      subtractingProduct.quantity = subtractingProduct.quantity - 1;
      subtractingProduct.subTotalPrice -=
        Math.floor(subtractingProduct.price * 100) / 100;
      // test
      if (subtractingProduct.subTotalPrice <= 0)
        // const numObj = 12345.6789
        // test
        subtractingProduct.totalPrice = (1.23e-10).toFixed(2);
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
    case "RESET": {
      return {
        cartProducts: [],
        totalQuantity: 0,
        totalPrice: 0,
      };
    }
  }
};

export default CartReducer;
