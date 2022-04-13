import { useContext, useState, useEffect } from "react";
import CartContext from "../../contexts/cart-context";
import CartProductUI from "../UIcomponents/Cart/CartProductUI";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material";

const CartList = () => {
  const cartCtx = useContext(CartContext);

  const [cartItems, setCartItems] = useState([]);

  const theme = useTheme();

  useEffect(() => {
    setCartItems(
      cartCtx.cartList.map((product, index) => {
        return (
          <CartProductUI
            key={index}
            id={product.id}
            name={product.name}
            price={product.price}
            subTotalPrice={product.subTotalPrice}
            quantity={product.quantity}
            isFavorite={product.isFavorite}
            // test
            imageUrl={product.imageUrl}
          />
        );
      })
    );
  }, [cartCtx.cartList]);

  let content = (
    <Typography
      variant="body1"
      component="p"
      color="primary"
      textAlign="center"
      pt={2}
    >
      No Products fond in your cart.
    </Typography>
  );

  if (cartItems.length > 0) content = cartItems;

  return (
    <Box
      sx={{
        maxHeight: "390px",
        overflow: "scroll",
        [theme.breakpoints.up("sm")]: { maxHeight: "480px" },
      }}
    >
      {content}
    </Box>
  );
};

export default CartList;
