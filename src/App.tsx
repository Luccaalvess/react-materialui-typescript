import { BrowserRouter } from "react-router";
import { AppRoutes } from "./routes";
// import { ThemeProvider } from "@mui/material";  
// import { LightTheme } from "./shared/themes";
import { AppThemeProvider, DrawerProvider } from "./shared/contexts";
import { MenuLateral } from "./shared/components";


function App() {
  return (
    <AppThemeProvider>
      <DrawerProvider>
        <BrowserRouter>
          <MenuLateral>
            <AppRoutes />
          </MenuLateral>
        </BrowserRouter>
      </DrawerProvider>
    </AppThemeProvider>
  );
}

export default App;
