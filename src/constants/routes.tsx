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
        path: "profile",
        element: <Profile />,
      },
      {
        path: "settings",
        element: <Setting />,
      },
    ],
  },
];
