import { useRouter } from "next/router";
import { IUseNavigationButtom } from "./useNavigationButtom.interfaces";

export const useNavigationButtom = (): IUseNavigationButtom => {
  const route = useRouter();

  const navigateToPath = (path: string) => {
    route.push(path);
  };

  return { pathName: route.pathname, navigateToPath };
};
