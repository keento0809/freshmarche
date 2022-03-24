import React, { useState, useReducer } from "react";
import FavoriteContext from "./favorite-context";

const initialState = {
  favoriteList: [],
  totalQuantity: 0,
};

const favoriteProvider = (props) => {
  const [favoriteState, dispatchAction] = useReducer(
    FavoriteReducer,
    initialState
  );

  const handleAddToFavoriteList = () => {
    dispatchAction();
  };
  const handleRemoveFromFavoriteList = () => {
    dispatchAction();
  };

  const favoriteContext = {};

  return (
    <FavoriteContext.Provider value={favoriteContext}>
      {props.children}
    </FavoriteContext.Provider>
  );
};

export default favoriteProvider;
