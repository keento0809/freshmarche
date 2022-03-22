import { Fragment } from "react";
// import SecondHeader from "../components/Header/SecondHeader";
import MainHeader from "../components/Header/MainHeader";
import MainFooter from "../components/Footer/MainFooter";
import ProductDetailComponent from "../components/ProductDetail/ProductDetailComponent";

const ProductDetail = () => {
  return (
    <Fragment>
      <MainHeader isHome={false} />
      <ProductDetailComponent />
      <MainFooter />
    </Fragment>
  );
};

export default ProductDetail;
