import { createContext, FC, useState } from "react";
import { TContextProps, TUserContext, TUser } from "../@types";
export const UserContext = createContext<TUserContext | null>(null);
const UserContextProvider: FC<TContextProps> = ({ children }) => {
  const [user, setUser] = useState<TUser>({
    email: "",
    userName: "Souvik Bhattacharjee",
    userId: "",
    profilePhoto: "",
  });
  const value = {
    user,
    setUser,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
