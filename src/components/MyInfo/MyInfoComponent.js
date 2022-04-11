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

  useEffect(() => {
    notifyCtx.resetNotification();
  }, []);

  return (
    <ContainerUI>
      <TitleUI title="My Info" />
      <UserInfoBox
        label="Username"
        // original code
        // val={userCtx.userInfo.username}
        // test
        val={userInfoInLocalStorage.username}
        type="text"
      />
      {/* original one */}
      {/* <UserInfoBox label="Address" val={userCtx.userInfo.address} type="text" /> */}
      <UserInfoBox
        label="Address"
        val={userInfoInLocalStorage.address}
        type="text"
      />
      {/* original one */}
      {/* <UserInfoBox label="Email" val={userCtx.userInfo.email} type="email" /> */}
      <UserInfoBox
        label="Email"
        val={userInfoInLocalStorage.email}
        type="email"
      />
      {/* original one */}
      {/* <UserInfoBox
        label="Password"
        val={userCtx.userInfo.password}
        type="password"
      /> */}
      <UserInfoBox
        label="Password"
        val={userInfoInLocalStorage.password}
        type="password"
      />
      {notifyCtx.isNotifying && <AlertSnackBar sx={{ width: "100%" }} />}
    </ContainerUI>
  );
};

export default MyInfoComponent;
