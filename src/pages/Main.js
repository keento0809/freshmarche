import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";
import ProductDetail from "./ProductDetail";

import ScopedCssBaseline from "@mui/material/ScopedCssBaseline";

const Main = () => {
  return (
    <BrowserRouter>
      <ScopedCssBaseline>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home" exact>
            <Home />
          </Route>
          {/* temporary */}
          <Route path="/products/detail" exact>
            <ProductDetail />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </ScopedCssBaseline>
    </BrowserRouter>
  );
};

export default Main;
