const FavoriteReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      console.log("Product will be added to the list.");
    }
    case "REMOVE": {
      console.log("Removing the product that you chose.");
    }
  }
};

export default FavoriteReducer;
