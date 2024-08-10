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
import { useNavigate } from "react-router-dom";
import { Profile } from "./Profile";
type TNavProp = {
  selectedItem: keyof typeof NAV_ITEMS;
  setSelectedItem: Dispatch<SetStateAction<keyof typeof NAV_ITEMS>>;
};
export const Nav: FC<TNavProp> = ({ selectedItem, setSelectedItem }) => {
  const navigate = useNavigate();
  const getIconClasses = useCallback(
    (item: keyof typeof NAV_ITEMS) => {
      return `transition-transform duration-300  hover:cursor-pointer ${selectedItem === item ? "scale-125" : "scale-100"}`;
    },
    [selectedItem],
  );

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
        onClick={() => {
          setSelectedItem(NAV_ITEMS.NOT_SELECTED);
          navigate("/");
        }}
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
          onClick={() => {
            setSelectedItem(NAV_ITEMS.CHAT);
            navigate("chats");
          }}
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
          onClick={() => {
            setSelectedItem(NAV_ITEMS.CALL);
            navigate("calls");
          }}
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
          onClick={() => {
            setSelectedItem(NAV_ITEMS.BOOKMARK);
            navigate("bookmarks");
          }}
        />
        <img
          src={
            selectedItem === NAV_ITEMS.SETTING
              ? IconSettingPrimary
              : IconSettingNormal
          }
          width={42}
          height={42}
          className={getIconClasses(NAV_ITEMS.SETTING)}
          onClick={() => {
            setSelectedItem(NAV_ITEMS.SETTING);
            navigate("settings");
          }}
        />
        <Profile />
      </div>
    </div>
  );
};
