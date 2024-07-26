import { useContext } from "react";
import { UserContext } from "../context/userContext";

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === null) {
    throw new Error("Context must be within context provider");
  }

  return context;
};
