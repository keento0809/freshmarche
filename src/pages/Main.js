import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";
import ProductDetail from "./ProductDetail";
import MyCart from "./MyCart";
import Favorites from "./Favorites";
import PaymentMethod from "./PaymentMethod";
import MyInfo from "./MyInfo";

import ScopedCssBaseline from "@mui/material/ScopedCssBaseline";

const Main = () => {
  return (
    <Router>
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
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </ScopedCssBaseline>
    </Router>
  );
};

export default Main;
