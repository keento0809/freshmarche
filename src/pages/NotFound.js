import { useContext } from "react";
import ContainerUI from "../components/UIcomponents/Container/ContainerUI";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MoveNextButton from "../components/UIcomponents/Buttons/MoveNextButton";
import AuthContext from "../contexts/auth-context";

const NotFound = () => {
  const authCtx = useContext(AuthContext);

  return (
    <ContainerUI>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: "100%",
          mx: "0 auto",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          component="h4"
          color="primary"
          textAlign="center"
          sx={{ fontWeight: "bold", pb: 4 }}
        >
          Page Not Found.
        </Typography>
        {!authCtx.isLoggedIn && (
          <Typography
            variant="body1"
            component="p"
            color="primary"
            textAlign="center"
            sx={{ fontWeight: "bold", pb: 4 }}
          >
            Please signin to load the page correctly.
          </Typography>
        )}
        <MoveNextButton label="BACK" link="/" />
      </Box>
    </ContainerUI>
  );
};

export default NotFound;
