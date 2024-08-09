import {
  Auth,
  Bookmark,
  Call,
  Contact,
  Dashboard,
  Message,
  Profile,
  Setting,
} from "../pages";
import { Login, Signup } from "../components";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
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
    errorElement: <NotFound />,
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
        path: "profile",
        element: <Profile />,
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
