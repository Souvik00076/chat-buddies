import { FC, useState } from "react";
import { Outlet } from "react-router-dom";
import { Nav } from "../components/shared";
import { NAV_ITEMS } from "../constants";

export const Dashboard: FC = () => {
  const [selectedItem, setSelectedItem] = useState<keyof typeof NAV_ITEMS>(
    NAV_ITEMS.NOT_SELECTED,
  );
  return (
    <div className="h-screen w-screen flex items-center">
      <Nav selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
      <Outlet />
    </div>
  );
};
