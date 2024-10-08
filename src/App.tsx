import { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./constants";
import ThemeContextProvider from "./context/ThemeContext";
import UserContextProvider from "./context/userContext";

export const App: FC = () => {
  const router = createBrowserRouter(routes);
  return (
    <ThemeContextProvider>
      <UserContextProvider>
        <RouterProvider router={router} />
      </UserContextProvider>
    </ThemeContextProvider>
  );
};
