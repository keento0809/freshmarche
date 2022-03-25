const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      console.log("Product added to the cart.");
      return state;
    }
    case "REMOVE": {
      console.log("Product removed from the cart.");
      return state;
    }
  }
};
