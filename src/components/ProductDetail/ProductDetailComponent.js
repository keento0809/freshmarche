import { useState } from "react";
import Info from "./Info";
import DetailHero from "./DetailHero";
import ContainerUI from "../UIcomponents/Container/ContainerUI";

const ProductDetailComponent = (props) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <ContainerUI>
      <DetailHero id={props.id} name={props.name} imageUrl={props.imageUrl} />
      <Info
        id={props.id}
        name={props.name}
        price={props.price}
        quantity={props.quantity}
        subTotalPrice={props.subTotalPrice}
        imageUrl={props.imageUrl}
        isFavorite={isFavorite}
        setIsFavorite={setIsFavorite}
      />
    </ContainerUI>
  );
};

export default ProductDetailComponent;
