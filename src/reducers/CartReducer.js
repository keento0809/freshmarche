const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      const addingProduct = action.payload;
      const updatedTotalQuantity = state.totalQuantity + addingProduct.quantity;
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

      let sample;
      if (
        state.cartProducts.find((product) => product.id === addingProduct.id)
      ) {
        sample = state.cartProducts.find(
          (product) => product.id === addingProduct.id
        );
        sample.quantity += action.payload.quantity;
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
      const newTotalPrice =
        Math.floor((state.totalPrice - subtractingProduct.price) * 100) / 100;

      subtractingProduct.quantity = subtractingProduct.quantity - 1;
      subtractingProduct.subTotalPrice -=
        Math.floor(subtractingProduct.price * 100) / 100;
      if (subtractingProduct.subTotalPrice <= 0)
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
