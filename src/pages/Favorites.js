import { Fragment } from "react";
import MainHeader from "../components/Header/MainHeader";
import MainFooter from "../components/Footer/MainFooter";
import MyFavorites from "../components/MyFavorites/MyFavorites";

const Favorites = () => {
  return (
    <Fragment>
      <MainHeader isHome={false} />
      <MyFavorites />
      <MainFooter />
    </Fragment>
  );
};

export default Favorites;
