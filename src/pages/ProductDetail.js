import { Fragment } from "react";
import SecondaryAppBarUI from "../components/UIcomponents/Header/SecondaryAppBarUI";
import BottomNavigationUI from "../components/UIcomponents/Footer/BottomNavigationUI";
import ProductDetailComponent from "../components/ProductDetail/ProductDetailComponent";

const ProductDetail = () => {
  return (
    <Fragment>
      <SecondaryAppBarUI />
      <ProductDetailComponent />
      <BottomNavigationUI />
    </Fragment>
  );
};

export default ProductDetail;
