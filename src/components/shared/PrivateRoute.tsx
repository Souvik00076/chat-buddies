import { FC } from "react";
import { useUser } from "../../hooks";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute: FC = () => {
  console.log("hello there private route");
  const isAuthenticated = useUser().user?.isAutenticated;
  return isAuthenticated ? <Outlet /> : <Navigate to="auth/login" />;
};
