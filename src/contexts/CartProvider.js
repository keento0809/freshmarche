import React, { useReducer } from "react";
import CartContext from "./cart-context";
import { addAction, removeAction } from "../actions/cart-action";
import CartReducer from "../reducers/CartReducer";

const initialState = {
  cartProducts: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const CartProvider = (props) => {
  const [cartState, dispatchAction] = useReducer(CartReducer, initialState);

  const handleAddToCart = (product) => {
    dispatchAction(addAction(product));
  };
  const handleRemoveFromCart = (id) => {
    dispatchAction(removeAction(id));
  };

  const cartContext = {
    cartList: cartState.cartProducts,
    totalQuantity: cartState.totalQuantity,
    totalPrice: cartState.totalPrice,
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
