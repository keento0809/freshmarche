import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";

const Main = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Main;
