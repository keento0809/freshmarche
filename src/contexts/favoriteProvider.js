import React, { useReducer } from "react";
import FavoriteContext from "./favorite-context";
import { addAction, removeAction } from "../actions/favorite-action";

const initialState = {
  listProducts: [],
  totalQuantity: 0,
};

const favoriteProvider = (props) => {
  const [favoriteState, dispatchAction] = useReducer(
    FavoriteReducer,
    initialState
  );

  const handleAddToFavoriteList = (product) => {
    dispatchAction(addAction(product));
  };
  const handleRemoveFromFavoriteList = (id) => {
    dispatchAction(removeAction(id));
  };

  const favoriteContext = {
    favoriteList: favoriteState.listProducts,
    totalQuantity: favoriteState.totalQuantity,
    addToFavoriteList: handleAddToFavoriteList,
    removeFromFavoriteList: handleRemoveFromFavoriteList,
  };

  return (
    <FavoriteContext.Provider value={favoriteContext}>
      {props.children}
    </FavoriteContext.Provider>
  );
};

export default favoriteProvider;
