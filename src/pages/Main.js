import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import React, { Suspense, useContext } from "react";
import AuthContext from "../contexts/auth-context";
import CheckoutContext from "../contexts/checkout-context";
import Home from "./Home";
import ScopedCssBaseline from "@mui/material/ScopedCssBaseline";
import Loading from "./Loading";

const NotFound = React.lazy(() => import("./NotFound"));
const ProductDetail = React.lazy(() => import("./ProductDetail"));
const MyCart = React.lazy(() => import("./MyCart"));
const Favorites = React.lazy(() => import("./Favorites"));
const PaymentMethod = React.lazy(() => import("./PaymentMethod"));
const MyInfo = React.lazy(() => import("./MyInfo"));
const OrderSummary = React.lazy(() => import("./OrderSummary"));
const OrderComplete = React.lazy(() => import("./OrderComplete"));
const AuthPage = React.lazy(() => import("./AuthPage"));
const Signup = React.lazy(() => import("./Signup"));

const Main = () => {
  const authCtx = useContext(AuthContext);
  const checkoutCtx = useContext(CheckoutContext);

  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <ScopedCssBaseline>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/home" />
            </Route>
            <Route path="/home" exact>
              <Home />
            </Route>
            {!authCtx.isLoggedIn && (
              <Route path="/authentication" exact>
                <AuthPage />
              </Route>
            )}
            {!authCtx.isLoggedIn && (
              <Route path="/signup" exact>
                <Signup />
              </Route>
            )}
            {/* temporary */}
            {authCtx.isLoggedIn && (
              <Route path="/mypage" exact>
                <MyInfo />
              </Route>
            )}
            {/* temporary */}
            {authCtx.isLoggedIn && (
              <Route path="/mycart" exact>
                <MyCart />
              </Route>
            )}
            {/* temporary */}
            {authCtx.isLoggedIn && (
              <Route path="/favorites" exact>
                <Favorites />
              </Route>
            )}
            {/* temporary */}
            <Route path="/products/:productId">
              <ProductDetail />
            </Route>
            {authCtx.isLoggedIn && checkoutCtx.isCheckedOut && (
              <Route path="/payment" exact>
                <PaymentMethod />
              </Route>
            )}
            {authCtx.isLoggedIn && checkoutCtx.isCheckedOut && (
              <Route path="/ordersummary" exact>
                <OrderSummary />
              </Route>
            )}
            {authCtx.isLoggedIn && checkoutCtx.isCheckedOut && (
              <Route path="/complete">
                <OrderComplete />
              </Route>
            )}
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
