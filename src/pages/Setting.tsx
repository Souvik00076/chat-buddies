import { FC } from "react";
import { PageWrapper } from "../components/shared";

export const Setting: FC = () => {
  return (
    <div className="h-full flex items-center w-full">
      <div className="w-[400px] bg-outlet-color overflow-y-scroll h-full"></div>
      <PageWrapper />
    </div>
  );
};
