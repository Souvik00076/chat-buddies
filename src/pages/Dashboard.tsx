import { FC, useEffect, useState } from "react";
import { Nav } from "../components/shared";
import { NAV_ITEMS } from "../constants";
import { useUser } from "../hooks";
import { Outlet, useNavigate } from "react-router-dom";

export const Dashboard: FC = () => {
  const [selectedItem, setSelectedItem] = useState<keyof typeof NAV_ITEMS>(
    NAV_ITEMS.NOT_SELECTED,
  );
  const navigate = useNavigate();
  const user = useUser().user;
  useEffect(() => {
    if (!user.isAuthenticated) navigate("/auth/login");
  }, [user, navigate]);

  return (
    <div className="h-screen flex items-center">
      <Nav selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
      <Outlet />
    </div>
  );
};
