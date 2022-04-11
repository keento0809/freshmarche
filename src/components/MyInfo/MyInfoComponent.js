import { useContext, useEffect } from "react";
import NotifyContext from "../../contexts/notify-context";
import ContainerUI from "../UIcomponents/Container/ContainerUI";
import TitleUI from "../UIcomponents/Title/TitleUI";
import UserInfoBox from "../UIcomponents/Box/UserInfoBox";
import AlertSnackBar from "../UIcomponents/Alert/AlertSnackBar";

const MyInfoComponent = () => {
  // declare content
  const notifyCtx = useContext(NotifyContext);

  const userInfoInLocalStorage = JSON.parse(localStorage.getItem("userInfo"));
  const currentUserInfo = {
    username: userInfoInLocalStorage.username,
    address: userInfoInLocalStorage.address,
    email: userInfoInLocalStorage.email,
    password: userInfoInLocalStorage.password,
  };

  useEffect(() => {
    notifyCtx.resetNotification();
  }, []);

  return (
    <ContainerUI>
      <TitleUI title="My Info" />
      <UserInfoBox
        label="Username"
        val={currentUserInfo.username}
        type="text"
      />
      <UserInfoBox label="Address" val={currentUserInfo.address} type="text" />
      <UserInfoBox label="Email" val={currentUserInfo.email} type="email" />
      <UserInfoBox
        label="Password"
        val={currentUserInfo.password}
        type="password"
      />
      {notifyCtx.isNotifying && <AlertSnackBar sx={{ width: "100%" }} />}
    </ContainerUI>
  );
};

export default MyInfoComponent;
