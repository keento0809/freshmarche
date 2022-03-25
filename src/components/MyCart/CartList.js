import { useContext, useState, useEffect } from "react";
import CartContext from "../../contexts/cart-context";
import CartProductUI from "../UIcomponents/Cart/CartProductUI";
import Typography from "@mui/material/Typography";

const CartList = () => {
  const cartCtx = useContext(CartContext);

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(
      cartCtx.cartList.map((product, index) => {
        return (
          <CartProductUI
            key={index}
            id={product.id}
            name={product.name}
            price={product.price}
            quantity={product.quantity}
            isFavoriteItem={false}
          />
        );
      })
    );
  }, [cartCtx.cartList]);

  let content = (
    <Typography variant="body1" component="p" color="primary">
      No Products fond in your cart.
    </Typography>
  );

  if (cartItems.length > 0) content = cartItems;

  return <div>{content}</div>;
};

export default CartList;
