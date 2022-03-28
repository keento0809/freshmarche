import { useContext } from "react";
import UserContext from "../../contexts/user-context";
import ContainerUI from "../UIcomponents/Container/ContainerUI";
import TitleUI from "../UIcomponents/Title/TitleUI";
import UserInfoBox from "../UIcomponents/Box/UserInfoBox";

const MyInfoComponent = () => {
  const userCtx = useContext(UserContext);

  return (
    <ContainerUI>
      <TitleUI title="My Info" />
      <UserInfoBox label="Username" val={userCtx.userInfo.username} />
      <UserInfoBox label="Address" val={userCtx.userInfo.address} />
      <UserInfoBox label="Email" val={userCtx.userInfo.email} />
      <UserInfoBox label="Password" val={userCtx.userInfo.password} />
    </ContainerUI>
  );
};

export default MyInfoComponent;
