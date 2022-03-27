import { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import FavoriteContext from "../../contexts/favorite-context";
import CartContext from "../../contexts/cart-context";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AddToCartButton from "../UIcomponents/Buttons/AddToCartButton";
import MainBoxUI from "../UIcomponents/Box/MainBox";
import Box from "@mui/material/Box";
import ChangeAmountButton from "../UIcomponents/Buttons/ChangeAmountButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Typography from "@mui/material/Typography";

const Info = (props) => {
  const history = useHistory();
  // manage the quantity of the product
  const [orderQuantity, setOrderQuantity] = useState(1);
  const [isAddCartPushed, setIsAddCartPushed] = useState(false);

  const favoriteCtx = useContext(FavoriteContext);
  const cartCtx = useContext(CartContext);

  const productInfo = {
    id: props.id,
    name: props.name,
    price: props.price,
    quantity: orderQuantity,
    subTotalPrice: props.price * orderQuantity,
    isFavorite: props.isFavorite,
  };

  const handleAddToFavorites = (product) => {
    favoriteCtx.addToFavoriteList(product);
    history.push("/");
  };

  const handleAddToCart = (product) => {
    cartCtx.addToCart(product);
    setIsAddCartPushed(true);
    history.push("/");
  };

  let isFavoriteVal;

  useEffect(() => {
    isFavoriteVal = favoriteCtx.favoriteList.find(
      (product) => product.id === props.id
    );
    console.log(isFavoriteVal === undefined);
  }, [favoriteCtx.totalQuantity]);

  return (
    <MainBoxUI>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Typography variant="body1" component="span" color="secondary">
          {props.name}
        </Typography>
        {isFavoriteVal === undefined && (
          <FavoriteBorderOutlinedIcon
            sx={{ color: "violet" }}
            onClick={() => handleAddToFavorites(productInfo)}
          />
        )}
        {isFavoriteVal !== undefined && (
          <FavoriteBorderOutlinedIcon
            sx={{ color: "violet" }}
            onClick={() => handleAddToFavorites(productInfo)}
          />
        )}
      </Box>
      <Box>
        <ChangeAmountButton
          quantity={orderQuantity}
          onClick={setOrderQuantity}
          productInfo={productInfo}
          isAddCartPushed={isAddCartPushed}
          onCheck={setIsAddCartPushed}
        />
        <Typography variant="h2" component="h3" color="white">
          ${props.price}
        </Typography>
        <Typography variant="span" component="p" color="secondary">
          Description
        </Typography>
        <KeyboardArrowDownIcon display="inline-block" color="secondary" />
      </Box>
      <Box margin="2rem 0">
        <AddToCartButton
          onClick={() => handleAddToCart(productInfo)}
          label="ADDTOCART"
          productInfo={productInfo}
        />
      </Box>
    </MainBoxUI>
  );
};

export default Info;
