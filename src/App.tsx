import { ThemeProvider } from "@emotion/react";
import { BrowserRouter } from "react-router-dom";
import { LigthTheme } from "./shared/themes";
import { AppRoutes } from "./routes";


export const App = () => {
  return (
    <ThemeProvider theme={LigthTheme}>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
    </ThemeProvider>
  );
}
