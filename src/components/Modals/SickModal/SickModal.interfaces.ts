export interface ISickModalProps {
  isOpen: boolean;
  title: string;
  subTitle: string;
  onClose: () => void;
  onYesPress: () => void;
}
