import { FC } from "react";
import { ACCORDION_EDITABLE_TYPE } from "../../constants";
type TCommonAccordion = {
  data: {
    header: string;
    icon: string;
    content: {
      [key: string]: {
        value: string | boolean;
        type: ACCORDION_EDITABLE_TYPE;
        isEditable: boolean;
      };
    };
  }[];
};
export const CommonAccordion1Level: FC<TCommonAccordion> = ({ data }) => {
  return <div>{data.map((element) => {})}</div>;
};
