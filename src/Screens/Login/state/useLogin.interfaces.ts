export interface IUseLogin {
  isLoading: boolean;
  login: () => void;
  loginFormActions: {
    setPassword: (text: string) => void;
    setEmail: (text: string) => void;
  };
}
