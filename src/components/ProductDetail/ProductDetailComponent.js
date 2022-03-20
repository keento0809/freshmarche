import Info from "./Info";
import DetailHero from "./DetailHero";
import ContainerUI from "../UIcomponents/Container/ContainerUI";

const ProductDetailComponent = () => {
  return (
    <ContainerUI>
      <DetailHero />
      <Info />
    </ContainerUI>
  );
};

export default ProductDetailComponent;
