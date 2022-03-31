import { Fragment } from "react";
import { useParams } from "react-router-dom";
import MainHeader from "../components/Header/MainHeader";
import MainFooter from "../components/Footer/MainFooter";
import ProductDetailComponent from "../components/ProductDetail/ProductDetailComponent";
import dummyData from "../data/dummyData.json";

const ProductDetail = (props) => {
  const params = useParams();
  const product = dummyData.find((product) => product.id === params.productId);

  return (
    <Fragment>
      <MainHeader isHome={false} />
      <ProductDetailComponent
        id={product.id}
        name={product.name}
        price={product.price}
        imageUrl={product.image}
      />
      <MainFooter />
    </Fragment>
  );
};

export default ProductDetail;
