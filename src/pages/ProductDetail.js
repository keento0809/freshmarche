import { Fragment } from "react";
import SecondHeader from "../components/Header/SecondHeader";
import MainFooter from "../components/Footer/MainFooter";
import ProductDetailComponent from "../components/ProductDetail/ProductDetailComponent";

const ProductDetail = () => {
  return (
    <Fragment>
      <SecondHeader />
      <ProductDetailComponent />
      <MainFooter />
    </Fragment>
  );
};

export default ProductDetail;
