import { useContext, useEffect, useState } from "react";
import FavoriteContext from "../../contexts/favorite-context";
import CartProductUI from "../UIcomponents/Cart/CartProductUI";

const FavoritesList = () => {
  const favoriteCtx = useContext(FavoriteContext);
  const [favoriteItems, setFavoriteItems] = useState([]);

  useEffect(() => {
    setFavoriteItems(
      favoriteCtx.favoriteList.map((product, index) => {
        return (
          <CartProductUI
            key={index}
            // index={index}
            id={product.id}
            name={product.name}
            price={product.price}
            quantity=""
          />
        );
      })
    );
  }, [favoriteCtx.favoriteList]);

  return <div>{favoriteItems}</div>;
};

export default FavoritesList;
