import React, { useReducer } from "react";
import CartContext from "./cart-context";
import { addAction,removeAction } from "../actions/cart-action";

const initialState = {
  cartProducts: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const CartProvider = (props) => {
  const [cartState, dispatchAction] = useReducer(CartReducer, initialState);

  const handleAddToCart = (product) => {
    dispatchAction(addAction(product));
  }
  const handleRemoveFromCart = (id) => {
    dispatchAction(removeAction(id));
  }

  const cartContext = {
    cartList = cartState.cartProducts,
    totalQuantity: cartState.totalQuantity,
    totalAmount: cartState.totalAmount,
    addToCart: handleAddToCart,
    removeFromCart: handleRemoveFromCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
