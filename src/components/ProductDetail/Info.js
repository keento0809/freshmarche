import { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import FavoriteContext from "../../contexts/favorite-context";
import CartContext from "../../contexts/cart-context";
import NotifyContext from "../../contexts/notify-context";
import AuthContext from "../../contexts/auth-context";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import MoveNextButton from "../UIcomponents/Buttons/MoveNextButton";
import MainBoxUI from "../UIcomponents/Box/MainBox";
import Box from "@mui/material/Box";
import ChangeAmountButton from "../UIcomponents/Buttons/ChangeAmountButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Typography from "@mui/material/Typography";
import AlertSnackBar from "../UIcomponents/Alert/AlertSnackBar";
import { useTheme } from "@mui/system";

const Info = (props) => {
  const history = useHistory();
  const theme = useTheme();

  // contexts
  const favoriteCtx = useContext(FavoriteContext);
  const cartCtx = useContext(CartContext);
  const notifyCtx = useContext(NotifyContext);
  const authCtx = useContext(AuthContext);

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
    imageUrl: props.imageUrl,
  };

  const handleAddToFavorites = (product) => {
    if (!authCtx.isLoggedIn) {
      alert("Please signup to add products to favorites.");
      return;
    }
    favoriteCtx.addToFavoriteList(product);
    // test redux-toolkit
    // dispatch(favoriteAction.addToFavoriteList(product));
    setIsInFavoriteList(true);
    notifyCtx.notifyNow("Product added to favorite list!", "success");
  };

  const handleAddToCart = (product) => {
    if (!authCtx.isLoggedIn) {
      alert("Please signup to add products to cart.");
      return;
    }
    cartCtx.addToCart(product);
    setIsAddCartPushed(true);
    notifyCtx.notifyNow("Product added to cart!");
    history.push("/");
  };

  const handleRemoveFromFavorite = (id) => {
    favoriteCtx.removeFromFavoriteList(id);
    setIsInFavoriteList(false);
    notifyCtx.notifyNow("Product removed from favorite.", "warning");
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
    <Box
      margin={props.margin}
      paddingTop={2}
      paddingBottom={2}
      sx={{
        flexGrow: "2",
        width: "100%",
        [theme.breakpoints.up(1023)]: {
          maxWidth: "480px",
        },
      }}
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
            onClick={() => handleRemoveFromFavorite(props.id)}
          />
        )}
      </Box>
      <Box className="これやな" paddingY={2} textAlign="center">
        <ChangeAmountButton
          quantity={orderQuantity}
          onClick={setOrderQuantity}
          productInfo={productInfo}
          isAddCartPushed={isAddCartPushed}
          isInProductDetail={true}
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
          link=""
        />
      </Box>
      <Box
        sx={{
          fontWeight: "bold",
          width: "95%",
          mx: "auto",
          position: "fixed",
          bottom: "100px",
          [theme.breakpoints.up("md")]: { bottom: "20px" },
          left: "2%",
        }}
      >
        {notifyCtx.isNotifying && <AlertSnackBar sx={{ width: "100%" }} />}
      </Box>
    </Box>
    // </MainBoxUI>
  );
};

export default Info;
