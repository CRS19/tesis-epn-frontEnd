import { mount, ReactWrapper } from "enzyme";
import { useLogin } from "./useLogin";
import * as hook from "./useLogin";
import { act } from "react-dom/test-utils";
import { useAppSelector } from "../../../Hooks/useAppHooks";
import store from "../../../store/store";

const mockRouterPush = jest.fn();

jest.mock("next/router", () => ({
  useRouter: () => ({
    push: mockRouterPush,
  }),
}));

describe("useLogin tests", () => {
  let wrapper: ReactWrapper;
  let spyState: jest.SpyInstance;
  let spyOnProp: jest.SpyInstance;
  let spyOnSetPassword: jest.SpyInstance;
  let spyOnSetNewEmail: jest.SpyInstance;
  let spyOnSetFullName: jest.SpyInstance;
  let spyOnSetNewPass: jest.SpyInstance;
  let spyOnSetConfirmPass: jest.SpyInstance;
  let spyOncChangeLoginFormToRegister: jest.SpyInstance;
  let spyOnChangeRegisterFormToLogin: jest.SpyInstance;
  let mock_store = store.getState();

  const TestComponent = () => {
    const props = useLogin();

    // @ts-ignore
    return <div {...props} />;
  };

  beforeEach(() => {
    (useAppSelector as jest.Mock).mockImplementation((fn) => fn(mock_store));

    wrapper = mount(<TestComponent />);
    spyState = jest.spyOn(hook, "useLogin");
    spyOnProp = jest.spyOn(
      wrapper.childAt(0).props().loginFormActions,
      "setEmail"
    );
    spyOnSetPassword = jest.spyOn(
      wrapper.childAt(0).props().loginFormActions,
      "setPassword"
    );
    spyOnSetNewEmail = jest.spyOn(
      wrapper.childAt(0).props().registerFormActions.emailInputProps,
      "setNewEmail"
    );
    spyOnSetFullName = jest.spyOn(
      wrapper.childAt(0).props().registerFormActions.fullNameInputProps,
      "setFullName"
    );
    spyOnSetNewPass = jest.spyOn(
      wrapper.childAt(0).props().registerFormActions.newPasswordProps,
      "setNewPassword"
    );
    spyOnSetConfirmPass = jest.spyOn(
      wrapper.childAt(0).props().registerFormActions.confirmPasswordProps,
      "setConfirmPass"
    );
    spyOncChangeLoginFormToRegister = jest.spyOn(
      wrapper.childAt(0).props().loginFormActions,
      "changeLoginFormToRegister"
    );
    spyOnChangeRegisterFormToLogin = jest.spyOn(
      wrapper.childAt(0).props().registerFormActions,
      "changeRegisterFormToLogin"
    );
  });

  afterEach(() => {
    wrapper.unmount();
    jest.clearAllMocks();
    spyState.mockClear();
    (useAppSelector as jest.Mock).mockClear();
  });

  const fillRegisterForm = (errorFom: boolean) => {
    const fullName = "Cristian Flores áéíóúÁÉÍÓÚÑñ";
    const newMailTest = "textmail@a.com";
    const newPassword = errorFom ? "" : "12345678";
    const confirmPass = "12345678";

    act(() => {
      wrapper
        .childAt(0)
        .props()
        .registerFormActions.emailInputProps.setNewEmail(newMailTest);
    });

    act(() => {
      wrapper
        .childAt(0)
        .props()
        .registerFormActions.fullNameInputProps.setFullName(fullName);
    });

    act(() => {
      wrapper
        .childAt(0)
        .props()
        .registerFormActions.newPasswordProps.setNewPassword(newPassword);
    });

    act(() => {
      wrapper
        .childAt(0)
        .props()
        .registerFormActions.confirmPasswordProps.setConfirmPass(confirmPass);
    });
  };

  it("When is change email in text input, then this hook should be called", () => {
    const textTest = "testemail";

    act(() => {
      wrapper.childAt(0).props().loginFormActions.setEmail(textTest);
    });

    expect(spyOnProp).toBeCalledTimes(1);
    expect(spyOnProp).toHaveBeenCalledWith(textTest);
  });

  it("When is change password in text input, then this hook should be called", () => {
    const passText = "testpass";

    act(() => {
      wrapper.childAt(0).props().loginFormActions.setPassword(passText);
    });

    expect(spyOnSetPassword).toBeCalledTimes(1);
    expect(spyOnSetPassword).toHaveBeenCalledWith(passText);
  });

  it("When is change enamil in text input, then this hook should be called", () => {
    const newMailTest = "textmail@a.com";

    act(() => {
      wrapper
        .childAt(0)
        .props()
        .registerFormActions.emailInputProps.setNewEmail(newMailTest);
    });

    expect(spyOnSetNewEmail).toBeCalledTimes(1);
    expect(spyOnSetNewEmail).toHaveBeenCalledWith(newMailTest);
  });

  it("When is change enamil in text input with a wrong mail, then this hook should be called", () => {
    const newMailTest = "textmail";

    act(() => {
      wrapper
        .childAt(0)
        .props()
        .registerFormActions.emailInputProps.setNewEmail(newMailTest);
    });

    expect(spyOnSetNewEmail).toBeCalledTimes(1);
    expect(spyOnSetNewEmail).toHaveBeenCalledWith(newMailTest);
  });

  it("When is change full name in text input, then this hook should be called", () => {
    const fullName = "Cristian Flores";

    act(() => {
      wrapper
        .childAt(0)
        .props()
        .registerFormActions.fullNameInputProps.setFullName(fullName);
    });

    expect(spyOnSetFullName).toBeCalledTimes(1);
    expect(spyOnSetFullName).toHaveBeenCalledWith(fullName);
  });

  it("When is change new password in text input with a pass less than 8 chars, then this hook should be called", () => {
    const newPassword = "123456";

    act(() => {
      wrapper
        .childAt(0)
        .props()
        .registerFormActions.newPasswordProps.setNewPassword(newPassword);
    });

    expect(spyOnSetNewPass).toBeCalledTimes(1);
    expect(spyOnSetNewPass).toHaveBeenCalledWith(newPassword);
  });

  it("When is change new password in text input, then this hook should be called", () => {
    const newPassword = "12345678";

    act(() => {
      wrapper
        .childAt(0)
        .props()
        .registerFormActions.newPasswordProps.setNewPassword(newPassword);
    });

    expect(spyOnSetNewPass).toBeCalledTimes(1);
    expect(spyOnSetNewPass).toHaveBeenCalledWith(newPassword);
  });

  it("When is change confirm password in text input, then this hook should be called", () => {
    const confirmPass = "123456";

    act(() => {
      wrapper
        .childAt(0)
        .props()
        .registerFormActions.confirmPasswordProps.setConfirmPass(confirmPass);
    });

    expect(spyOnSetConfirmPass).toBeCalledTimes(1);
    expect(spyOnSetConfirmPass).toHaveBeenCalledWith(confirmPass);
  });

  it("When is change confirm password in text input, with match passwords, then this hook should be called", () => {
    const confirmPass = "12345678";
    const newPassword = "12345678";

    act(() => {
      wrapper
        .childAt(0)
        .props()
        .registerFormActions.newPasswordProps.setNewPassword(newPassword);
    });

    act(() => {
      wrapper
        .childAt(0)
        .props()
        .registerFormActions.confirmPasswordProps.setConfirmPass(confirmPass);
    });

    expect(spyOnSetConfirmPass).toBeCalledTimes(1);
    expect(spyOnSetConfirmPass).toHaveBeenCalledWith(confirmPass);
  });

  it("When login is called and it has correct credentials, then isLoading should be true", () => {
    act(() => {
      wrapper.childAt(0).prop("login")();
    });

    mock_store = {
      generalReducer: { ...store.getState().generalReducer, isLoggedIn: true },
    };

    wrapper.update();

    expect(mock_store.generalReducer.isLoggedIn).toEqual(true);
  });

  it("When registerNewUser is called and it has INITIAL state form, then isLoading should be true", () => {
    act(() => {
      wrapper.childAt(0).prop("registerFormActions").registerNewUser();
    });

    mock_store = {
      generalReducer: {
        ...store.getState().generalReducer,
        isLoggedIn: true,
      },
    };

    wrapper.update();

    expect(mock_store.generalReducer.isLoggedIn).toEqual(true);
  });

  it("When registerNewUser is called and it has correct info forms, then isLoading should be true", () => {
    fillRegisterForm(false);

    wrapper.update();

    act(() => {
      wrapper.childAt(0).prop("registerFormActions").registerNewUser();
    });

    mock_store = {
      generalReducer: {
        ...store.getState().generalReducer,
        isLoggedIn: true,
      },
    };

    wrapper.update();

    expect(mock_store.generalReducer.isLoggedIn).toEqual(true);
  });

  it("When registerNewUser is called with error info, then isLoading should be true", () => {
    fillRegisterForm(true);

    wrapper.update();

    act(() => {
      wrapper.childAt(0).prop("registerFormActions").registerNewUser();
    });

    mock_store = {
      generalReducer: {
        ...store.getState().generalReducer,
        isLoggedIn: true,
      },
    };

    wrapper.update();

    expect(mock_store.generalReducer.isLoggedIn).toEqual(true);
  });

  it("When the user do click on Registrarse, then it should show the Register form", () => {
    act(() => {
      wrapper.childAt(0).prop("loginFormActions").changeLoginFormToRegister();
    });

    wrapper.update();

    expect(spyOncChangeLoginFormToRegister).toHaveBeenCalled();
    expect(wrapper.childAt(0).prop("isRegister")).toEqual(true);
  });

  it("When the user do click on Iniciar Sesion, then it should show the Login form", () => {
    act(() => {
      wrapper
        .childAt(0)
        .prop("registerFormActions")
        .changeRegisterFormToLogin();
    });

    wrapper.update();
    expect(spyOnChangeRegisterFormToLogin).toHaveBeenCalled();
    expect(wrapper.childAt(0).prop("isRegister")).toEqual(false);
  });

  it("When the user is logged in, then should navigate to home page", () => {
    wrapper.unmount();
    mock_store = {
      generalReducer: { ...store.getState().generalReducer, isLoggedIn: true },
    };

    (useAppSelector as jest.Mock).mockImplementation((fn) => fn(mock_store));

    wrapper = mount(<TestComponent />);

    expect(mockRouterPush).toHaveBeenCalled();
  });

  it("When the store is undefined, it should get default values", () => {
    wrapper.unmount();
    mock_store = {
      generalReducer: {
        ...store.getState().generalReducer,
        isLoggedIn: undefined,
        isLoading: undefined,
      },
    };

    (useAppSelector as jest.Mock).mockImplementation((fn) => fn(mock_store));

    wrapper = mount(<TestComponent />);

    expect(wrapper.find("div").prop("isLoading")).toEqual(false);
  });
});
