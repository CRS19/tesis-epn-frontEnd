import { mount, ReactWrapper } from "enzyme";
import { useRouter } from "next/router";
import { useLogin } from "./useLogin";
import * as hook from "./useLogin";
import { act } from "react-dom/test-utils";
import { useAppSelector } from "../../../Hooks/useAppHooks";
import store from "../../../store/store";
import { set } from "lodash";

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
  });

  afterEach(() => {
    wrapper.unmount();
    jest.clearAllMocks();
    spyState.mockClear();
    (useAppSelector as jest.Mock).mockClear();
  });

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

    console.log(wrapper.debug());

    expect(wrapper.find("div").prop("isLoading")).toEqual(false);
  });
});
