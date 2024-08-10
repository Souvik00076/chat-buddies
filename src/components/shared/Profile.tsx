import { FC, useState } from "react";
import Avatar from "react-avatar";
import { useUser } from "../../hooks";
import { mergeStyles } from "../../utils";
import { IconEdit } from "../../constants";

type TProfile = {
  size?: string;
  src?: string;
  isEditable?: boolean;
  onEdit?: (file: unknown) => Promise<void>;
  style?: string;
};

export const Profile: FC<TProfile> = ({
  size,
  src,
  isEditable = false,
  onEdit,
  style = "",
}) => {
  const userContext = useUser();
  const [showHover, setShowHover] = useState<boolean>(false);

  return (
    <div
      className={mergeStyles("relative", size, style)}
      onMouseEnter={() => setShowHover(true)}
      onMouseLeave={() => setShowHover(false)}
    >
      <Avatar
        name={userContext.user.userName}
        src={src}
        color="#00A3FF"
        size={size ? size : "48"}
        round={true}
        className={`${showHover && isEditable ? "opacity-95" : "opacity-100"} relative`}
      />
      {isEditable && showHover && (
        <div
          className="
            left-0 
            right-0 
            top:0
            w-full
            h-full
            bottom-0 
            absolute 
            rounded-full
            z-[99999]
            flex 
            items-center
            justify-center
            "
        >
          <img
            src={IconEdit}
            alt="Edit icon"
            onClick={async () => {
              if (!onEdit) return;
              console.log("hello  there");
              await onEdit("hsf");
            }}
          />
        </div>
      )}
    </div>
  );
};
