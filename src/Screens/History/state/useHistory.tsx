import { useAuth } from "../../../Hooks/useAuth";

export const useHistory = () => {
  const { isLoggedIn } = useAuth();

  return { isLoggedIn };
};
