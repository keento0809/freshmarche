import { useContext, useEffect, useState } from "react";
import CartContext from "../../contexts/cart-context";
import CartSummaryUI from "../UIcomponents/Cart/CartSummaryUI";

const CartSummaryComponent = () => {
  const cartCtx = useContext(CartContext);
  const [totalCartPrice, setTotalCartPrice] = useState(0);

  useEffect(() => {
    setTotalCartPrice(cartCtx.totalPrice);
  }, [cartCtx.totalPrice]);

  return (
    <CartSummaryUI
      label="CHECKOUT"
      totalCartPrice={totalCartPrice.toFixed(2)}
      deliveryFee={0}
    />
  );
};

export default CartSummaryComponent;
