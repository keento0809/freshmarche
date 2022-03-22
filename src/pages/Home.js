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
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
