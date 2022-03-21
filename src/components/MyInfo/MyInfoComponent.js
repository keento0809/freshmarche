import ContainerUI from "../UIcomponents/Container/ContainerUI";
import TitleUI from "../UIcomponents/Title/TitleUI";
import UserInfoBox from "../UIcomponents/Box/UserInfoBox";

const MyInfoComponent = () => {
  return (
    <ContainerUI>
      <TitleUI title="My Info" />
      <UserInfoBox label="Username" val="Dummy Dummy" />
      <UserInfoBox label="Address" val="816 Granville St. Vancouver BC" />
      <UserInfoBox label="Email" val="sample@gmail.com" />
      <UserInfoBox label="Password" val="**********" />
    </ContainerUI>
  );
};

export default MyInfoComponent;
