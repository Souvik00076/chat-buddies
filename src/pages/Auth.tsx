import { FC } from "react";
import { Outlet } from "react-router-dom";

export const Auth: FC = () => {
  return (
    <div
      className="bg-primary-light 
            h-full
            w-full"
    >
      <Outlet />
    </div>
  );
};
