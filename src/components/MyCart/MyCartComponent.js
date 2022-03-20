import ContainerUI from "../UIcomponents/Container/ContainerUI";
import CartSummaryComponent from "./CartSummaryComponent";
import TitleUI from "../UIcomponents/Title/TitleUI";
import CartList from "./CartList";

const MyCartComponent = () => {
  return (
    <ContainerUI>
      <TitleUI title="My Cart" />
      <CartList />
      <CartSummaryComponent />
    </ContainerUI>
  );
};

export default MyCartComponent;
