import { Dispatch, ReactNode, SetStateAction } from "react";
import { STATUS } from "../constants";

export type TThemeContext = {
  theme: boolean;
  toggleTheme: () => void;
};
export type TUser = {
  email: string;
  userName: string;
  userId: string;
  profilePhoto: string;
  status: (typeof STATUS)[keyof typeof STATUS];
  isAuthenticated: boolean;
  lastSeen: boolean;
  readRecipt: boolean;
  location: string;
  displayStatus: boolean;
};
export type TUserContext = {
  user: TUser;
  setUser: Dispatch<SetStateAction<TUser>>;
};
export type TContextProps = {
  children: ReactNode;
};
