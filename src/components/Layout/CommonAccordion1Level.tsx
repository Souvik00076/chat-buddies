import { FC, useState } from "react";
import {
  ACCORDION_EDITABLE_TYPE,
  IconDropdownDown,
  IconEdit2,
} from "../../constants";
import { Switch } from "../shared";
import { useDebounce } from "../../hooks";

type TCommonAccordion = {
  data: {
    header: string;
    icon: string;
    content: {
      [key: string]: {
        value: string | boolean;
        type: ACCORDION_EDITABLE_TYPE;
        isEditable: boolean;
        onChange?: (state: boolean | string) => Promise<boolean>;
      };
    };
  }[];
};
export const CommonAccordion1Level: FC<TCommonAccordion> = ({ data }) => {
  const [showChildren, setShowChildren] = useState<boolean[]>(
    data.map(() => false),
  );
  const debouncedSetIsTextEditable = useDebounce(() => {
    console.log("hello");
    setIsTextEditable(false);
  }, 1000);

  const [isTextEditable, setIsTextEditable] = useState<boolean>(false);
  const handleClick = (index: number) => {
    setShowChildren((prevState) => {
      const flag = !prevState[index];
      const newState = prevState.map(() => false);
      newState[index] = flag;
      return newState;
    });
  };

  return (
    <div className="w-full pt-2  mt-12 pb-12 flex flex-col items-center overflow-y-scroll hide-scrollbar">
      {data.map((element, index) => (
        <div key={index} className="w-full border-t border-border-for">
          <div
            className={`${showChildren[index] ? "bg-neutral-50" : ""}  cursor-pointer `}
          >
            <div
              onClick={() => handleClick(index)}
              className={`h-full grid grid-cols-accordion-item-grid px-4 py-1 items-center my-2`}
            >
              <img src={element.icon} width={24} height={24} alt="item_icon" />
              <span className="font-semibold text-primary-dark">
                {element.header}
              </span>
              <img
                src={IconDropdownDown}
                alt="dropdown"
                width={16}
                height={16}
              />
            </div>
          </div>
          <div className="contentTransition">
            {showChildren[index] &&
              Object.keys(element.content).map((key) => {
                const { value, type, isEditable, onChange } =
                  element.content[key];
                return (
                  <div
                    key={key}
                    className={`w-full grid grid-cols-accordion-nested-item-grid items-center px-4 py-1`}
                  >
                    <div className="flex flex-col">
                      <span
                        className={`${
                          type === ACCORDION_EDITABLE_TYPE.CHECKBOX
                            ? "text-neutral-800 font-medium"
                            : "text-neutral-500"
                        }`}
                      >
                        {key.charAt(0).toUpperCase() +
                          key.slice(1).toLowerCase()}
                      </span>
                      {type === ACCORDION_EDITABLE_TYPE.TEXT &&
                        (isTextEditable && onChange ? (
                          <input
                            type="text"
                            className="
                            bg-transparent
                            border-none
                            py-2
                            "
                            defaultValue={value as string}
                            onChange={(
                              e: React.ChangeEvent<HTMLInputElement>,
                            ) => {
                              debouncedSetIsTextEditable();
                              onChange(e.target.value as string);
                            }}
                          />
                        ) : (
                          <span className="text-neutral-800 font-medium">
                            {value}
                          </span>
                        ))}
                    </div>
                    {isEditable &&
                      (type === ACCORDION_EDITABLE_TYPE.CHECKBOX ? (
                        <Switch
                          initialState={value as boolean}
                          onStateChange={async (state) => {
                            if (!onChange) {
                              return false;
                            }
                            const flag = await onChange(state);
                            return flag;
                          }}
                          switchOnContainer="bg-primary-light"
                          switchOffContainer="bg-neutral-500"
                          buttonStyle="h-[12px] w-[12px] "
                          containerStyle="flex w-[24px] h-[12px]"
                          switchOffStyle="mr-[12px]"
                          switchOnStyle="ml-[12px]"
                        />
                      ) : (
                        <img
                          src={IconEdit2}
                          alt="IconEdit2"
                          className="cursor-pointer"
                          width={16}
                          height={16}
                          onClick={() => {
                            setIsTextEditable(true);
                          }}
                        />
                      ))}
                  </div>
                );
              })}
          </div>
        </div>
      ))}
    </div>
  );
};
