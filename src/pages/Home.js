import React, { useEffect, useState, useContext } from "react";
import MainHeader from "../components/Header/MainHeader";
import HomeMain from "../components/Main/HomeMain";
import MainFooter from "../components/Footer/MainFooter";
import OriginalModal from "../components/UIcomponents/Modal/OriginalModal";
import CheckoutContext from "../contexts/checkout-context";
import { styled } from "@mui/system";
import BackdropUI from "../components/UIcomponents/Backdrop/Backdrop";
import AuthContext from "../contexts/auth-context";

const HomeComponent = styled("div")({
  minHeight: "100vh",
});

const Home = () => {
  const [open, setOpen] = useState(false);
  const [backdropOpen, setBackdropOpen] = useState(true);

  const checkoutCtx = useContext(CheckoutContext);
  const { isLoggedIn } = useContext(AuthContext);

  console.log(isLoggedIn);

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

  const handleCloseBackdrop = () => {
    if (localStorage.getItem("firstLoad")) {
      setBackdropOpen(false);
      return;
    }
    setTimeout(() => {
      setBackdropOpen(false);
      localStorage.setItem("firstLoad", "loaded");
    }, 5000);
  };

  useEffect(() => {
    checkoutCtx.removeCheckedOut();
    handleCloseBackdrop();
  }, []);

  return (
    <HomeComponent>
      {modal}
      <BackdropUI
        backdropOpen={backdropOpen}
        setBackdropOpen={setBackdropOpen}
      />
      <MainHeader isHome={true} onOpen={handleOpen} onClose={handleClose} />
      <HomeMain />
      <MainFooter />
    </HomeComponent>
  );
};

export default Home;
