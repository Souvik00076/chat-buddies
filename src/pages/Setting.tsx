import { FC } from "react";
import {
  IconEdit,
  IconStatusGreen,
  IconStatusRed,
  IconStatusYellow,
  STATUS,
} from "../constants";
import { DropdownModal, Profile } from "../components/shared";
import { useUser } from "../hooks";
export const Setting: FC = () => {
  const userContext = useUser();
  return (
    <div
      className="w-[400px]
      bg-white-smoke 
      overflow-y-hidden
      h-full
      flex
      flex-col
    "
    >
      <div className="w-full relative h-[25%]">
        <div className="w-full h-full bg-neutral-700"></div>
        <div
          className="absolute
        left-0 
        top-0 
        right-0 
        w-full 
        flex 
        justify-between
        px-6
        py-4
        text-white-smoke
        font-bold
        "
        >
          <p className="text-xl">Settings</p>
          <div
            className="w-[40px]
          h-[40px] 
          rounded-full
          bg-white-smoke 
          flex 
          items-center 
          justify-center"
          >
            <img src={IconEdit} className="w-[70%] h-[70%] " alt="Edit icon" />
          </div>
        </div>
        <Profile
          isEditable={true}
          src={userContext.user.profilePhoto}
          size="100"
          style="bottom-[-50px] 
          absolute 
          left-1/2 transform -translate-x-1/2
          cursor-pointer
          "
        />
      </div>
      <div
        className="flex
        flex-col 
        mt-[100px]
        justify-center
        items-center
        "
      >
        <p className="text-xl">{userContext.user.userName}</p>
        <DropdownModal
          contents={Object.values(STATUS)}
          images={[IconStatusGreen, IconStatusYellow, IconStatusRed]}
          onClick={(status: string) => {
            userContext.setUser((prev) => {
              return { ...prev, status: status };
            });
          }}
          selected={"Active"}
        />
      </div>
    </div>
  );
};
