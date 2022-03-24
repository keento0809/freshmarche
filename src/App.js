import Main from "./pages/Main";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";
import FavoriteProvider from "./contexts/FavoriteProvider";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <FavoriteProvider>
        <div className="App">
          <Main />
        </div>
      </FavoriteProvider>
    </ThemeProvider>
  );
}

export default App;
