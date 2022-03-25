import { useContext, useEffect, useState } from "react";
import FavoriteContext from "../../contexts/favorite-context";
import CartProductUI from "../UIcomponents/Cart/CartProductUI";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const FavoritesList = () => {
  const favoriteCtx = useContext(FavoriteContext);
  const [favoriteItems, setFavoriteItems] = useState([]);

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
            quantity=""
            onClick={favoriteCtx.removeFromFavoriteList}
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

  return <Box textAlign="center">{content}</Box>;
};

export default FavoritesList;
