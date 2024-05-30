
import { useContext } from "react";
import { UserContext } from "@/context/UserContext";

export const useCurrentUser = () => {
  const user = useContext(UserContext);
  return { user };
};
