import Main from "./pages/Main";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";
import FavoriteProvider from "./contexts/FavoriteProvider";
import CartProvider from "./contexts/CartProvider";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <FavoriteProvider>
        <CartProvider>
          <div className="App">
            <Main />
          </div>
        </CartProvider>
      </FavoriteProvider>
    </ThemeProvider>
  );
}

export default App;
