import { IUser } from "../../../Shared/Interfaces/User.interfaces";
import { ISickModalProps } from "../../../components/Modals/SickModal/SickModal.interfaces";
import { IPosibleSickModalProps } from "../../../components/Modals/PosibleSickModal/PosibleSickModal.interfaces";

export interface IUseHome {
  isLoggedIn: boolean;
  currentUser: IUser;
  sickModalPorps: ISickModalProps;
  HealthModalProps: ISickModalProps;
  alertSickModalProps: IPosibleSickModalProps;
  isLoading: boolean;
  openSickModal: () => void;
  openHealthModal: () => void;
  openAlertSickModal: () => void;
}
