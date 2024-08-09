import { Dispatch, FC, SetStateAction, useCallback } from "react";
import {
  IconBookMarkListNormal,
  IconBookMarkListPrimary,
  IconCallListNormal,
  IconCallListPrimary,
  IconLogoPrimary,
  IconMessageListNormal,
  IconMessageListPrimary,
  IconSettingNormal,
  IconSettingPrimary,
  NAV_ITEMS,
} from "../../constants";

type TNavProp = {
  selectedItem: keyof typeof NAV_ITEMS;
  setSelectedItem: Dispatch<SetStateAction<keyof typeof NAV_ITEMS>>;
};

export const Nav: FC<TNavProp> = ({ selectedItem, setSelectedItem }) => {
  // Define a function to determine the size and classes for each icon
  const getIconClasses = useCallback(
    (item: keyof typeof NAV_ITEMS) => {
      return `transition-transform duration-300  hover:cursor-pointer ${selectedItem === item ? "scale-125" : "scale-100"}`;
    },
    [selectedItem],
  );
  // Define a function to determine the size and classes for each icon

  return (
    <div
      className="
        py-8
        h-full 
        w-[80px] 
        bg-nav-color
        flex
        flex-col
        gap-y-2
        items-center
      "
    >
      <img
        src={IconLogoPrimary}
        width={42}
        height={42}
        className="hover:cursor-pointer"
        onClick={() => setSelectedItem(NAV_ITEMS.NOT_SELECTED)}
      />
      <div className="flex flex-col justify-evenly flex-1 items-center">
        <img
          src={
            selectedItem === NAV_ITEMS.CHAT
              ? IconMessageListPrimary
              : IconMessageListNormal
          }
          width={42}
          height={42}
          className={getIconClasses(NAV_ITEMS.CHAT)}
          onClick={() => setSelectedItem(NAV_ITEMS.CHAT)}
        />
        <img
          src={
            selectedItem === NAV_ITEMS.CALL
              ? IconCallListPrimary
              : IconCallListNormal
          }
          width={42}
          height={42}
          className={getIconClasses(NAV_ITEMS.CALL)}
          onClick={() => setSelectedItem(NAV_ITEMS.CALL)}
        />
        <img
          src={
            selectedItem === NAV_ITEMS.BOOKMARK
              ? IconBookMarkListPrimary
              : IconBookMarkListNormal
          }
          width={42}
          height={42}
          className={getIconClasses(NAV_ITEMS.BOOKMARK)}
          onClick={() => setSelectedItem(NAV_ITEMS.BOOKMARK)}
        />
        <img
          src={
            selectedItem === NAV_ITEMS.SETTING
              ? IconSettingPrimary
              : IconSettingNormal
          }
          width={48}
          height={48}
          className={getIconClasses(NAV_ITEMS.SETTING)}
          onClick={() => setSelectedItem(NAV_ITEMS.SETTING)}
        />
      </div>
    </div>
  );
};
