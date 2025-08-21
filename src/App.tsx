import { BrowserRouter } from "react-router";
import { AppRoutes } from "./routes";
// import { ThemeProvider } from "@mui/material";  
// import { LightTheme } from "./shared/themes";
import { AppThemeProvider } from "./shared/contexts";


function App() {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AppThemeProvider>
  );
}

export default App;
