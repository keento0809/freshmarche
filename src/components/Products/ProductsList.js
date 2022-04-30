import { Fragment } from "react";
import Product from "./Product";
import { styled } from "@mui/system";
import dummyData from "../../data/dummyData.json";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";

const ProductList = (props) => {
  const theme = useTheme();

  const UlComponent = styled("ul")({
    margin: 0,
    padding: "0.5rem 0",
    listStyle: "none",
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    [theme.breakpoints.up(900)]: {
      justifyContent: "flex-start",
      paddingLeft: "1rem",
    },
  });
  const filtering = dummyData.filter((product) =>
    product.name.toLowerCase().includes(props.value.toLowerCase())
  );
  // original code
  // const products = DUMMY_PRODUCTS.map((product, index) => {
  let products = filtering.map((product, index) => {
    // const products = dummyData.map((product, index) => {
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
  if (props.value.length > 0 && products.length === 0)
    products = (
      <Typography variant="body1" component="p" color="primary">
        No products matched.
      </Typography>
    );

  return (
    <Fragment>
      <UlComponent>{products}</UlComponent>
    </Fragment>
  );
};

export default ProductList;
