import { Fragment } from "react";
import SecondHeader from "../components/Header/SecondHeader";
import MainFooter from "../components/Footer/MainFooter";
import MyFavorites from "../components/MyFavorites/MyFavorites";

const Favorites = () => {
  return (
    <Fragment>
      <SecondHeader />
      <MyFavorites />
      <MainFooter />
    </Fragment>
  );
};

export default Favorites;
