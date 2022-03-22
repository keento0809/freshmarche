import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import React, { Suspense } from "react";
import Home from "./Home";
// import NotFound from "./NotFound";
// import ProductDetail from "./ProductDetail";
// import MyCart from "./MyCart";
// import Favorites from "./Favorites";
// import PaymentMethod from "./PaymentMethod";
// import MyInfo from "./MyInfo";
// import OrderSummary from "./OrderSummary";
import ScopedCssBaseline from "@mui/material/ScopedCssBaseline";

const NotFound = React.lazy(() => import("./NotFound"));
const ProductDetail = React.lazy(() => import("./ProductDetail"));
const MyCart = React.lazy(() => import("./MyCart"));
const Favorites = React.lazy(() => import("./Favorites"));
const PaymentMethod = React.lazy(() => import("./PaymentMethod"));
const MyInfo = React.lazy(() => import("./MyInfo"));
const OrderSummary = React.lazy(() => import("./OrderSummary"));

const Main = () => {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <ScopedCssBaseline>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/home" />
            </Route>
            <Route path="/home" exact>
              <Home />
            </Route>
            {/* temporary */}
            <Route path="/mypage" exact>
              <MyInfo />
            </Route>
            {/* temporary */}
            <Route path="/mycart" exact>
              <MyCart />
            </Route>
            {/* temporary */}
            <Route path="/favorites" exact>
              <Favorites />
            </Route>
            {/* temporary */}
            <Route path="/products/detail" exact>
              <ProductDetail />
            </Route>
            {/* temporary */}
            <Route path="/payment" exact>
              <PaymentMethod />
            </Route>
            {/* temporary */}
            <Route path="/ordersummary" exact>
              <OrderSummary />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </ScopedCssBaseline>
      </Suspense>
    </Router>
  );
};

export default Main;
