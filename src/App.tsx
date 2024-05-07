import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import router from "@/router";

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="kori-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
