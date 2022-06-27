export interface IMainButtonProps {
  btnText: string;
  onClick: () => void;
  hasMarginTop?: boolean;
  borderRadius?: boolean;
  width?: string;
  variant?: "primary" | "secondary" | "tertiary";
}
