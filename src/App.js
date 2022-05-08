import Main from "./pages/Main";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";
import FavoriteProvider from "./contexts/FavoriteProvider";
import CartProvider from "./contexts/CartProvider";
import NotifyProvider from "./contexts/NotifyProvider";
import AuthProvider from "./contexts/AuthProvider";
import CheckoutProvider from "./contexts/CheckoutProvider";
// test redux-toolkit
import { Provider } from "react-redux";
import store from "../src/store/index";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <FavoriteProvider>
            <CartProvider>
              <NotifyProvider>
                <CheckoutProvider>
                  <div className="App">
                    <Main />
                  </div>
                </CheckoutProvider>
              </NotifyProvider>
            </CartProvider>
          </FavoriteProvider>
        </AuthProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
