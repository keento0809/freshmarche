import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";
import ProductDetail from "./ProductDetail";

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
          <Route path="/products/detail" exact>
            <ProductDetail />
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
