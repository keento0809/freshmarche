import { useContext } from "react";
import UserContext from "../../contexts/user-context";
import NotifyContext from "../../contexts/notify-context";
import ContainerUI from "../UIcomponents/Container/ContainerUI";
import TitleUI from "../UIcomponents/Title/TitleUI";
import UserInfoBox from "../UIcomponents/Box/UserInfoBox";
import AlertSnackBar from "../UIcomponents/Alert/AlertSnackBar";

const MyInfoComponent = () => {
  // declare content
  const userCtx = useContext(UserContext);
  const notifyCtx = useContext(NotifyContext);

  return (
    <ContainerUI>
      <TitleUI title="My Info" />
      <UserInfoBox
        label="Username"
        val={userCtx.userInfo.username}
        type="text"
      />
      <UserInfoBox label="Address" val={userCtx.userInfo.address} type="text" />
      <UserInfoBox label="Email" val={userCtx.userInfo.email} type="email" />
      <UserInfoBox
        label="Password"
        val={userCtx.userInfo.password}
        type="password"
      />
      {notifyCtx.isNotifying && <AlertSnackBar sx={{ width: "100%" }} />}
    </ContainerUI>
  );
};

export default MyInfoComponent;
