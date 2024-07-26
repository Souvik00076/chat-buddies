import { Dispatch, ReactNode, SetStateAction } from "react";

export type TThemeContext = {
  theme: boolean;
  toggleTheme: () => void;
};
export type TUser = {
  email: string;
  userName: string;
  userId: string;
};
export type TUserContext = {
  user: TUser;
  setUser: Dispatch<SetStateAction<TUser>>;
};
export type TContextProps = {
  children: ReactNode;
};
