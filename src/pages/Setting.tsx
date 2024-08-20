import { FC } from "react";
import {
  ACCORDION_EDITABLE_TYPE,
  IconEdit,
  IconPrivacy,
  IconProfile,
  IconStatusGreen,
  IconStatusRed,
  IconStatusYellow,
  STATUS,
} from "../constants";
import { DropdownModal, Profile } from "../components/shared";
import { useUser } from "../hooks";
import { useLoaderData } from "react-router-dom";
import { CommonAccordion1Level } from "../components/Layout/CommonAccordion1Level";

type TLoader = {
  personalInfo: {
    userName: string;
    email: string;
    location: string;
  };
  privacyInfo: {
    displayStatus: boolean;
    readRecipient: boolean;
    showLastSeen: boolean;
  };
};
export const Setting: FC = () => {
  const userContext = useUser();
  const data: TLoader = useLoaderData() as unknown as TLoader;
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
      <CommonAccordion1Level
        data={(() => {
          const structuredData: {
            header: string;
            icon: string;
            content: {
              [key: string]: {
                value: string | boolean;
                type: ACCORDION_EDITABLE_TYPE;
                isEditable: boolean;
              };
            };
          }[] = [];
          structuredData.push({
            header: "Personal Info",
            icon: IconProfile,
            content: {
              name: {
                value: data.personalInfo.userName,
                type: ACCORDION_EDITABLE_TYPE.TEXT,
                isEditable: true,
              },
              email: {
                value: data.personalInfo.email,
                type: ACCORDION_EDITABLE_TYPE.TEXT,
                isEditable: false,
              },
              location: {
                value: data.personalInfo.location,
                type: ACCORDION_EDITABLE_TYPE.TEXT,
                isEditable: true,
              },
            },
          });
          structuredData.push({
            header: "Privcy",
            icon: IconPrivacy,
            content: {
              status: {
                value: data.privacyInfo.displayStatus,
                type: ACCORDION_EDITABLE_TYPE.CHECKBOX,
                isEditable: true,
              },
              readRecipient: {
                value: data.privacyInfo.readRecipient,
                type: ACCORDION_EDITABLE_TYPE.CHECKBOX,
                isEditable: true,
              },
              lastSeen: {
                value: data.privacyInfo.showLastSeen,
                type: ACCORDION_EDITABLE_TYPE.CHECKBOX,
                isEditable: true,
              },
            },
          });
          return structuredData;
        })()}
      />
    </div>
  );
};
