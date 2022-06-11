export interface INewPasswordInputProps {
  error: boolean;
  errorText: string;
  value: string;
  setNewPassword: (text: string) => void;
  registerNewUser: () => void;
  placeHolder?: string;
}

export interface IConfirmPasswordProps {
  error: boolean;
  errorText: string;
  value: string;
  setConfirmPass: (text: string) => void;
  placeHolder?: string;
}
