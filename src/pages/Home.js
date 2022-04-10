import React, { Fragment, useState } from "react";
import MainHeader from "../components/Header/MainHeader";
import HomeHero from "../components/Hero/HomeHero";
import HomeMain from "../components/Main/HomeMain";
import MainFooter from "../components/Footer/MainFooter";
import HomeProducts from "../components/Products/HomeProducts";
import OriginalModal from "../components/UIcomponents/Modal/OriginalModal";
import { styled } from "@mui/system";

const HomeComponent = styled("div")({
  minHeight: "100vh",
});

const Home = () => {
  // state
  const [open, setOpen] = useState(false);
  // dummy
  // const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // const handleLogin = () => setIsLoggedIn(true);
  // const handleLogout = () => setIsLoggedIn(false);

  const modal = open ? (
    <OriginalModal
      onOpen={handleOpen}
      onClose={handleClose}
      setOpen={setOpen}
      isOpen={open}
    />
  ) : (
    ""
  );

  return (
    <HomeComponent>
      {modal}
      <MainHeader isHome={true} onOpen={handleOpen} onClose={handleClose} />
      <HomeMain />
      <MainFooter />
    </HomeComponent>
  );
};

export default Home;
