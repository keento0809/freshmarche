import { Fragment } from "react";
import Product from "./Product";
import { styled } from "@mui/system";
import dummyData from "../../data/dummyData.json";

const UlComponent = styled("ul")({
  margin: 0,
  // paddingLeft: 0,
  padding: "0.5rem 0",
  listStyle: "none",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
});

const ProductList = (props) => {
  // original code
  // const products = DUMMY_PRODUCTS.map((product, index) => {
  const products = dummyData.map((product, index) => {
    return (
      <Product
        key={index}
        id={product.id}
        name={product.name}
        price={product.price}
        quantity={1}
        imageUrl={product.image}
      />
    );
  });

  return (
    <Fragment>
      <UlComponent>{products}</UlComponent>
    </Fragment>
  );
};

export default ProductList;
