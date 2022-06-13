export interface IUseMobileTopBar {
  openMenu: boolean;
  routesArray: string[];
  currentPath: string;
  handleOpenCloseMemu: (isOpen: boolean) => void;
  navigateTo: (index: number) => void;
}
