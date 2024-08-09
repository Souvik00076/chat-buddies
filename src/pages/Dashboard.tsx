import { FC } from "react";
import { Outlet } from "react-router-dom";

export const Dashboard: FC = () => {
  return (
    <div className="h-screen flex items-center">
      <div className="h-full w-[100px] bg-nav-color"></div>
      <Outlet />
    </div>
  );
};
