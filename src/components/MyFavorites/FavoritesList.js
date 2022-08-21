import { useContext, useEffect, useState } from "react";
import FavoriteContext from "../../contexts/favorite-context";
import CartProductUI from "../UIcomponents/Cart/CartProductUI";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material";

const FavoritesList = () => {
  const favoriteCtx = useContext(FavoriteContext);
  const [favoriteItems, setFavoriteItems] = useState([]);

  const theme = useTheme();

  useEffect(() => {
    setFavoriteItems(
      favoriteCtx.favoriteList.map((product, index) => {
        return (
          <CartProductUI
            key={index}
            id={product.id}
            name={product.name}
            price={product.price}
            subTotalPrice={product.price}
            isFavorite={product.isFavorite}
            quantity=""
            onClick={favoriteCtx.removeFromFavoriteList}
            imageUrl={product.imageUrl}
          />
        );
      })
    );
  }, [favoriteCtx.favoriteList]);

  let content = (
    <Typography variant="body1" component="p" color="primary">
      No Products found in Favorite List.
    </Typography>
  );

  if (favoriteItems.length > 0) content = favoriteItems;

  return (
    <Box
      textAlign="center"
      sx={{
        maxWidth: "550px",
        mx: "auto",
        maxHeight: "570px",
        overflow: "scroll",
        [theme.breakpoints.up("sm")]: { maxHeight: "670px" },
      }}
    >
      {content}
    </Box>
  );
};

export default FavoritesList;
