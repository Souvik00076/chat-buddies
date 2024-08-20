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
import { generateRequest } from "../services";

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
        loader: async () => {
          const settings = await generateRequest({
            path: "/chat-buddies/profile",
            method: "GET",
          });
          return settings;
        },
      },
      {
        index: true,
        element: <Home />,
      },
    ],
  },
];
