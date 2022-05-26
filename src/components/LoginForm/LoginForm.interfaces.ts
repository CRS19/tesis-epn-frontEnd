export interface ILoginFormProps {
  login: () => void;
  loginFormActions: {
    setPassword: (text: string) => void;
    setEmail: (text: string) => void;
  };
}
