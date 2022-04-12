import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import NotifyContext from "../../contexts/notify-context";
import AuthContext from "../../contexts/auth-context";
import ContainerUI from "../UIcomponents/Container/ContainerUI";
import TitleUI from "../UIcomponents/Title/TitleUI";
import UserInfoBox from "../UIcomponents/Box/UserInfoBox";
import Box from "@mui/material/Box";
import AlertSnackBar from "../UIcomponents/Alert/AlertSnackBar";
import MoveNextButton from "../UIcomponents/Buttons/MoveNextButton";
import { useTheme } from "@mui/material";

const MyInfoComponent = () => {
  // declare content
  const notifyCtx = useContext(NotifyContext);
  const authCtx = useContext(AuthContext);

  const theme = useTheme();
  const history = useHistory();

  const userInfoInLocalStorage = JSON.parse(localStorage.getItem("userInfo"));
  const currentUserInfo = {
    username: userInfoInLocalStorage.username,
    address: userInfoInLocalStorage.address,
    email: userInfoInLocalStorage.email,
    password: userInfoInLocalStorage.password,
  };

  const handleLogout = () => {
    authCtx.logout();
    notifyCtx.notifyNow("Successfully Logout !!", "warning");
    history.push("/authentication");
  };

  useEffect(() => {
    notifyCtx.resetNotification();
  }, []);

  return (
    <ContainerUI>
      <TitleUI title="My Info" />
      <Box
        sx={{
          [theme.breakpoints.up(900)]: { width: "80%", mx: "auto" },
          [theme.breakpoints.up(1300)]: { width: "65%", mx: "auto" },
        }}
      >
        <UserInfoBox
          label="Username"
          val={currentUserInfo.username}
          type="text"
        />
        <UserInfoBox
          label="Address"
          val={currentUserInfo.address}
          type="text"
        />
        <UserInfoBox label="Email" val={currentUserInfo.email} type="email" />
        <UserInfoBox
          label="Password"
          val={currentUserInfo.password}
          type="password"
        />
        <Box py={6} textAlign="center">
          <MoveNextButton label="Logout" onClick={handleLogout} />
        </Box>
      </Box>
    </ContainerUI>
  );
};

export default MyInfoComponent;
