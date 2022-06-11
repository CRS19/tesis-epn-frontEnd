import { shallow, ShallowWrapper } from "enzyme";
import Login from "./Login";
import { Provider } from "react-redux";
import store from "../../store/store";
import { IconsHeader } from "../../components/IconsHeader/IconsHeader";
import { LoginIcon } from "../../components/LoginIcon/LoginIcon";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { useAppSelector } from "../../Hooks/useAppHooks";
import * as useLoginHook from "./state/useLogin";
import { RegisterForm } from "../../components/RegisterForm/RegisterForm";

describe("Login Tests", () => {
  let wrapper: ShallowWrapper;
  const mock_store = store.getState();
  let use_login_mock_response = {
    isLoading: false,
    isRegister: false,
    login: jest.fn(),
    loginFormActions: {
      setPassword: jest.fn(),
      setEmail: jest.fn(),
      changeLoginFormToRegister: jest.fn(),
    },
    registerFormActions: {
      changeRegisterFormToLogin: jest.fn(),
      fullNameInputProps: {
        error: false,
        value: "",
        errorText: "",
        setFullName: jest.fn(),
      },
      emailInputProps: {
        error: false,
        value: "",
        errorText: "",
        setNewEmail: jest.fn(),
      },
      newPasswordProps: {
        error: false,
        value: "",
        errorText: "",
        setNewPassword: jest.fn(),
        registerNewUser: jest.fn(),
      },
      confirmPasswordProps: {
        error: false,
        value: "",
        errorText: "",
        setConfirmPass: jest.fn(),
      },
      registerNewUser: jest.fn(),
    },
  };

  beforeEach(() => {
    (useAppSelector as jest.Mock).mockImplementation((fn) => fn(mock_store));

    mountComponent();
  });

  afterEach(() => {
    wrapper.unmount();
    jest.clearAllMocks();
  });

  const mountComponent = () => {
    wrapper = shallow(
      <Provider store={store}>
        <Login />
      </Provider>
    );
  };

  it("When component is render and registrations not has elements, it must render 1 Icons Header, 1 LoginIcon and 1 Login Form", () => {
    expect(wrapper.find(Login).dive().find(IconsHeader)).toHaveLength(1);
    expect(wrapper.find(Login).dive().find(LoginIcon)).toHaveLength(1);
    expect(wrapper.find(Login).dive().find(LoginForm)).toHaveLength(1);
  });

  it("When component is render and propo isRegister is true, it must render 1 Icons Header, 1 LoginIcon and 1 RegisterForm Form", () => {
    jest.spyOn(useLoginHook, "useLogin").mockImplementation(() => ({
      ...use_login_mock_response,
      isRegister: true,
    }));

    mountComponent();

    expect(wrapper.find(Login).dive().find(IconsHeader)).toHaveLength(1);
    expect(wrapper.find(Login).dive().find(LoginIcon)).toHaveLength(1);
    expect(wrapper.find(Login).dive().find(RegisterForm)).toHaveLength(1);
  });
});
