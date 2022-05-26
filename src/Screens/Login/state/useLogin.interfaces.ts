export interface IUseLogin {
  login: () => void;
  loginFormActions: {
    setPassword: (text: string) => void;
    setEmail: (text: string) => void;
  };
}
