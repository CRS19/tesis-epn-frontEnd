import { IErrorFormLinkDevice } from "../../Screens/LinkDevice/state/useLinkDevice.interfaces";

export interface ILinkDeviceFromProps {
  errorForm: IErrorFormLinkDevice;
  idDevice: string;
  hasIdDevice: boolean;
  handleInputIdDevice: (idDevice: string) => void;
  onSubmit: () => void;
}
