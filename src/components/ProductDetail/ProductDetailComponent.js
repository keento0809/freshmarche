import Info from "./Info";
import DetailHero from "./DetailHero";
import ContainerUI from "../UIcomponents/Container/ContainerUI";

const ProductDetailComponent = (props) => {
  return (
    <ContainerUI>
      <DetailHero id={props.id} name={props.name} imageUrl={props.imageUrl} />
      <Info
        id={props.id}
        name={props.name}
        price={props.price}
        imageUrl={props.imageUrl}
      />
    </ContainerUI>
  );
};

export default ProductDetailComponent;
