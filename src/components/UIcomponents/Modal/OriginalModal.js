import * as React from "react";
import { NavLink } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
// import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";

const style = {
  position: "fixed",
  top: "56px",
  left: "0%",
  // transform: "translate(-50%, -50%)",
  // Original code
  // width: 400,
  width: "100%",
  bgcolor: "background.default",
  border: "2px solid primary",
  boxShadow: 24,
  textAlign: "center",
  listStyle: "none",
  textDecoration: "none",
};

const UlStyle = styled("ul")({
  padding: "2.1rem 0",
  listStyle: "none",
  margin: 0,
});

const closeIconStyle = {
  position: "absolute",
  top: "2%",
  left: "4.4%",
  color: "primary.main",
};

const OriginalModal = (props) => {
  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        // original code
        // open={open}
        open={props.isOpen}
        // original code
        // onClose={handleClose}
        onClose={props.onClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.isOpen}>
          <Box sx={style}>
            <CloseIcon sx={closeIconStyle} onClick={props.onClose} />
            <UlStyle>
              <NavLink
                to="/mypage"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <Typography
                  variant="body1"
                  component="p"
                  display="block"
                  paddingBottom="1.2rem"
                  cursor="pointer"
                  color="primary"
                  width="50%"
                  margin="0 auto"
                >
                  My Info
                </Typography>
              </NavLink>
              <NavLink
                to="/mycart"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Typography
                  variant="body1"
                  component="p"
                  display="block"
                  paddingBottom="1.2rem"
                  cursor="pointer"
                  color="primary"
                >
                  My Cart
                </Typography>
              </NavLink>
              <NavLink
                to="/favorites"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Typography
                  variant="body1"
                  component="p"
                  display="block"
                  paddingBottom="1.2rem"
                  cursor="pointer"
                  color="primary"
                >
                  Favorites
                </Typography>
              </NavLink>
              <NavLink
                to="#"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Typography
                  variant="body1"
                  component="p"
                  display="block"
                  // paddingBottom="1rem"
                  cursor="pointer"
                  color="primary"
                >
                  Logout
                </Typography>
              </NavLink>
            </UlStyle>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default OriginalModal;
