import Main from "./pages/Main";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";
import FavoriteProvider from "./contexts/FavoriteProvider";
import CartProvider from "./contexts/CartProvider";
import NotifyProvider from "./contexts/NotifyProvider";
import UserProvider from "../src/contexts/UserProvider";
import AuthProvider from "./contexts/AuthProvider";

function App() {
  console.log((1 + 1 + 1 + 1).toFixed(2));

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <FavoriteProvider>
          <CartProvider>
            <NotifyProvider>
              <UserProvider>
                <div className="App">
                  <Main />
                </div>
              </UserProvider>
            </NotifyProvider>
          </CartProvider>
        </FavoriteProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
