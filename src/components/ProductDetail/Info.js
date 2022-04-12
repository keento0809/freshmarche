import { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import FavoriteContext from "../../contexts/favorite-context";
import CartContext from "../../contexts/cart-context";
import NotifyContext from "../../contexts/notify-context";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import MoveNextButton from "../UIcomponents/Buttons/MoveNextButton";
import MainBoxUI from "../UIcomponents/Box/MainBox";
import Box from "@mui/material/Box";
import ChangeAmountButton from "../UIcomponents/Buttons/ChangeAmountButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Typography from "@mui/material/Typography";

const Info = (props) => {
  const history = useHistory();

  // contexts
  const favoriteCtx = useContext(FavoriteContext);
  const cartCtx = useContext(CartContext);
  const notifyCtx = useContext(NotifyContext);

  // manage the quantity of the product
  const [orderQuantity, setOrderQuantity] = useState(1);
  const [isAddCartPushed, setIsAddCartPushed] = useState(false);
  const [isInFavoriteList, setIsInFavoriteList] = useState(false);

  const productInfo = {
    id: props.id,
    name: props.name,
    price: props.price,
    quantity: orderQuantity,
    subTotalPrice: props.price * orderQuantity,
  };

  const handleAddToFavorites = (product) => {
    favoriteCtx.addToFavoriteList(product);
    setIsInFavoriteList(true);
    notifyCtx.notifyNow("Product added to favorite list!");
    // test
    // history.push("/");
  };

  const handleAddToCart = (product) => {
    cartCtx.addToCart(product);
    setIsAddCartPushed(true);
    // original code DO NOT Delete!
    notifyCtx.notifyNow("Product added to cart!");
    history.push("/");
  };

  const handleTry = () => {
    console.log("I gutta toggle favorite icon.");
  };

  useEffect(() => {
    if (
      !(
        favoriteCtx.favoriteList.find((item) => item.id === props.id) ===
        undefined
      )
    ) {
      setIsInFavoriteList(true);
    }
  }, [favoriteCtx.favoriteList]);

  return (
    // <MainBoxUI>
    <div
      sx={{
        width: "100%",
        height: "auto",
        bgcolor: "background.default",
        backgroundSize: "cover",
        textAlign: "center",
      }}
      margin={props.margin}
      paddingTop={2}
      paddingBottom={2}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        className="フレックスなう"
      >
        {/* test */}
        {/* <Typography variant="body1" component="span" color="secondary">
          {props.name}
        </Typography> */}
        {!isInFavoriteList && (
          <FavoriteBorderOutlinedIcon
            sx={{ color: "violet", cursor: "pointer" }}
            onClick={() => handleAddToFavorites(productInfo)}
          />
        )}
        {isInFavoriteList && (
          <FavoriteIcon
            sx={{ color: "violet", cursor: "pointer" }}
            onClick={() => handleTry()}
          />
        )}
      </Box>
      <Box className="これやな" paddingY={2} textAlign="center">
        <ChangeAmountButton
          quantity={orderQuantity}
          onClick={setOrderQuantity}
          productInfo={productInfo}
          isAddCartPushed={isAddCartPushed}
          onCheck={setIsAddCartPushed}
        />
        <Typography
          variant="h2"
          component="h3"
          color="white"
          paddingTop={1}
          paddingBottom={2}
        >
          ${props.price}{" "}
          <Typography
            variant="body2"
            component="span"
            color="white"
            fontWeight="bold"
          >
            /lb
          </Typography>
        </Typography>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
        >
          <Typography
            variant="span"
            component="p"
            color="secondary"
            paddingLeft={1.6}
          >
            Description
          </Typography>
          {/* original code */}
          <KeyboardArrowDownIcon
            display="inline-block"
            color="secondary"
            sx={{ fontSize: "1.5rem" }}
          />
        </Box>
      </Box>
      <Box margin="2rem 0" sx={{ textAlign: "center" }}>
        <MoveNextButton
          onClick={() => handleAddToCart(productInfo)}
          label="ADDTOCART"
          productInfo={productInfo}
        />
      </Box>
    </div>
    // </MainBoxUI>
  );
};

export default Info;
