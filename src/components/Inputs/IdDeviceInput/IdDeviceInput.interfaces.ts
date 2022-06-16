export interface IdDeviceInputProps {
  error: boolean;
  value: string;
  errorText: string;
  vinculateDevice: (idDevice: string) => void;
}
