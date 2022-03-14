import { Fragment } from "react";
import Product from "./Product";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    name: "Apple",
    price: 10.99,
    image:
      "https://thehealthybutcher.com/images/P/the-healthy-butcher-organic-gala-apple-single.jpg",
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
];

const ProductList = (props) => {
  const products = DUMMY_PRODUCTS.map((product, index) => {
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
      <ul>{products}</ul>
    </Fragment>
  );
};

export default ProductList;
