import Info from "./Info";
import DetailHero from "./DetailHero";
import ContainerUI from "../UIcomponents/Container/ContainerUI";
import Box from "@mui/material/Box";

const ProductDetailComponent = (props) => {
  return (
    <ContainerUI>
      {/* test box */}
      <Box paddingBottom="100px">
        <DetailHero id={props.id} name={props.name} imageUrl={props.imageUrl} />
        <Info
          id={props.id}
          name={props.name}
          price={props.price}
          quantity={props.quantity}
          subTotalPrice={props.subTotalPrice}
          imageUrl={props.imageUrl}
        />
      </Box>
    </ContainerUI>
  );
};

export default ProductDetailComponent;
