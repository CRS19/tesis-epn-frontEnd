export interface IEmailInputProps {
  error: boolean;
  errorText: string;
  value: string;
  setNewEmail: (text: string) => void;
}
