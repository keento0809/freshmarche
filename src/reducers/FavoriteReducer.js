const FavoriteReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      console.log("Product will be added to the list.");
      return state;
    }
    case "REMOVE": {
      console.log("Removing the product that you chose.");
      return state;
    }
  }
};

export default FavoriteReducer;
