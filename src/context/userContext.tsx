import { createContext, FC, useEffect, useState } from "react";
import { TContextProps, TUserContext, TUser } from "../@types";
import { STATUS } from "../constants";
import { generateRequest } from "../services";
import { useToast } from "../hooks";
export const UserContext = createContext<TUserContext | null>(null);
const UserContextProvider: FC<TContextProps> = ({ children }) => {
  const { toastError } = useToast();
  const [user, setUser] = useState<TUser>({
    email: "",
    userName: "",
    userId: "",
    profilePhoto: "",
    status: STATUS.INACTIVE,
    isAuthenticated: false,
  });
  useEffect(() => {
    (async () => {
      try {
        const data = (await generateRequest<TUser>({
          path: "verify-token",
          method: "GET",
        })) as TUser;
        setUser({ ...data });
      } catch (error) {
        toastError(
          error instanceof Error ? error.message : "Something went wrong",
        );
      }
    })();
  }, []);
  const value = {
    user,
    setUser,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
export default UserContextProvider;
