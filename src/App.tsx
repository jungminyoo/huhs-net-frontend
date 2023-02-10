import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./settings/GlobalStyles";
import router from "./settings/Router";
import { lightTheme } from "./settings/theme";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
