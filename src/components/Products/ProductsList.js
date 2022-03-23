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

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    name: "Banana",
    price: 2.99,
    image:
      "https://www.dole.com/-/media/project/dole/produce-images/fruit/bannanas_web.png?rev=b27a9f94db1744e9ae702a0ba20871d4&hash=AF03ECA16ACB32D92A74462BE212E716",
  },
  {
    id: "p2",
    name: "Banana",
    price: 2.99,
    image:
      "https://www.dole.com/-/media/project/dole/produce-images/fruit/bannanas_web.png?rev=b27a9f94db1744e9ae702a0ba20871d4&hash=AF03ECA16ACB32D92A74462BE212E716",
  },
  {
    id: "p3",
    name: "Grape",
    price: 7.99,
    image: "https://www.hgofarms.com/wp-content/uploads/2021/05/grapes1.png",
  },
  {
    id: "p4",
    name: "Grape",
    price: 7.99,
    image: "https://www.hgofarms.com/wp-content/uploads/2021/05/grapes1.png",
  },
  {
    id: "p5",
    name: "Grape",
    price: 7.99,
    image: "https://www.hgofarms.com/wp-content/uploads/2021/05/grapes1.png",
  },
  {
    id: "p6",
    name: "Grape",
    price: 7.99,
    image: "https://www.hgofarms.com/wp-content/uploads/2021/05/grapes1.png",
  },
  {
    id: "p7",
    name: "Grape",
    price: 7.99,
    image: "https://www.hgofarms.com/wp-content/uploads/2021/05/grapes1.png",
  },
  {
    id: "p8",
    name: "Grape",
    price: 7.99,
    image: "https://www.hgofarms.com/wp-content/uploads/2021/05/grapes1.png",
  },
  {
    id: "p9",
    name: "Grape",
    price: 7.99,
    image: "https://www.hgofarms.com/wp-content/uploads/2021/05/grapes1.png",
  },
];

const ProductList = (props) => {
  // original code
  // const products = DUMMY_PRODUCTS.map((product, index) => {
  const products = dummyData.map((product, index) => {
    return (
      <Product
        key={index}
        name={product.name}
        price={product.price}
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
