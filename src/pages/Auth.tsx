import { FC, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useUser } from "../hooks";

export const Auth: FC = () => {
  const navigate = useNavigate();
  const user = useUser().user;

  useEffect(() => {
    if (user.isAuthenticated) navigate(-1);
  }, [user, navigate]);
  return (
    <div
      className="bg-primary-light 
            h-screen
            w-full
            flex 
            items-center
            justify-end
            px-16
            "
    >
      <Outlet />
    </div>
  );
};
