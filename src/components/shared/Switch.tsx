import { FC, useState } from "react";
import { mergeStyles } from "../../utils";
type TSwitchProp = {
  initialState: boolean;
  onStateChange: (state: boolean) => Promise<boolean>;
  containerStyle: string;
  buttonStyle: string;
  switchOnStyle: string;
  switchOffStyle: string;
  switchOnContainer: string;
  switchOffContainer: string;
};
export const Switch: FC<TSwitchProp> = ({
  initialState,
  onStateChange,
  switchOnContainer,
  switchOffContainer,
  containerStyle,
  buttonStyle,
  switchOnStyle,
  switchOffStyle,
}) => {
  const [state, setState] = useState<boolean>(initialState);
  return (
    <div
      onClick={async () => {
        const flag = await onStateChange(!state);
        if (!flag) {
          setState(!state);
        }
        setState(!state);
      }}
      className={mergeStyles(
        "rounded-full transition-all duration-500 hover:cursor-pointer",
        `${state ? switchOnContainer : switchOffContainer}`,
        containerStyle,
      )}
    >
      <span
        className={mergeStyles(
          buttonStyle,
          "bg-neutral-50 rounded-full transition-all duration-300 shadow-lg",
          `${state ? switchOnStyle : switchOffStyle}`,
        )}
      ></span>
    </div>
  );
};
