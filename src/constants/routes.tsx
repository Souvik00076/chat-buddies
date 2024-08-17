import {
  Auth,
  Bookmark,
  Call,
  Contact,
  Dashboard,
  Message,
  Setting,
} from "../pages";
import { Login, Signup } from "../components";
import { Home } from "../pages/Home";
import { PrivateRoute } from "../components/shared/PrivateRoute";

export const routes = [
  {
    path: "auth",
    element: <Auth />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "sign-up",
        element: <Signup />,
      },
    ],
  },
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "bookmarks",
        element: <Bookmark />,
      },
      {
        path: "calls",
        element: <Call />,
      },
      {
        path: "chats",
        element: <Message />,
      },
      {
        path: "contacts",
        element: <Contact />,
      },
      {
        path: "settings",
        element: <Setting />,
      },
      {
        index: true,
        element: <Home />,
      },
    ],
  },
];
