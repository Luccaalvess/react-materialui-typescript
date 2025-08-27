import { BrowserRouter } from "react-router";
import { AppRoutes } from "./routes";
// import { ThemeProvider } from "@mui/material";  
// import { LightTheme } from "./shared/themes";
import { AppThemeProvider } from "./shared/contexts";
import { MenuLateral } from "./shared/components";


function App() {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <MenuLateral>
          <AppRoutes />
        </MenuLateral>
      </BrowserRouter>
    </AppThemeProvider>
  );
}

export default App;
