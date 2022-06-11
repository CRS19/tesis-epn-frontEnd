import { mount, ReactWrapper } from "enzyme";
import { useAppSelector } from "../../../Hooks/useAppHooks";
import store from "../../../store/store";
import { useHome } from "./useHome";
import { act } from "react-dom/test-utils";
import * as useHomeHook from "./useHome";
import { RoutesEnum } from "../../../Shared/Enums/Routes";
import { rolesEnum } from "../../../Shared/Enums/Roles";

const mockRouterPush = jest.fn();

jest.mock("next/router", () => ({
  useRouter: () => ({
    push: mockRouterPush,
  }),
}));

describe("useHome tests", () => {
  let wrapper: ReactWrapper;
  let spyState: jest.SpyInstance;
  let spyOnLogOut: jest.SpyInstance;
  let mock_store = store.getState();

  const TestComponent = () => {
    const props = useHome();

    //@ts-ignore
    return <div {...props} />;
  };

  beforeEach(() => {
    (useAppSelector as jest.Mock).mockImplementation((fn) => fn(mock_store));

    wrapper = mount(<TestComponent />);

    spyState = jest.spyOn(useHomeHook, "useHome");
  });

  afterEach(() => {
    wrapper.unmount();
    jest.clearAllMocks();
    spyState.mockClear();
    (useAppSelector as jest.Mock).mockClear();
  });

  it("When is LogOut is called, then it should log out", () => {
    act(() => {
      wrapper.childAt(0).props().logOut();
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

  it("When the user is no loggedIn, then it should redirect to loggin page", () => {
    wrapper.unmount();
    mock_store = {
      generalReducer: {
        ...store.getState().generalReducer,
        isLoggedIn: false,
      },
    };

    wrapper = mount(<TestComponent />);

    expect(mockRouterPush).toHaveBeenCalledWith(RoutesEnum.LOGIN);
  });

  it("When the user exists and user has no idDevice, then it should redirect to Link Device page", () => {
    wrapper.unmount();
    mock_store = {
      generalReducer: {
        ...store.getState().generalReducer,
        isLoggedIn: true,
        currentUser: {
          fullName: "Cris Flores",
          idDevice: "",
          isDevice: false,
          isPossibleSick: false,
          isSick: false,
          mail: "a@a.com",
          rol: rolesEnum.USER,
        },
      },
    };

    wrapper = mount(<TestComponent />);

    expect(mockRouterPush).toHaveBeenCalledWith(RoutesEnum.LINK_DEVICE);
  });

  it("When the user exists and user has idDevice, then it should not redirect to Link Device page", () => {
    wrapper.unmount();
    mock_store = {
      generalReducer: {
        ...store.getState().generalReducer,
        isLoggedIn: true,
        currentUser: {
          fullName: "Cris Flores",
          idDevice: "12345",
          isDevice: false,
          isPossibleSick: false,
          isSick: false,
          mail: "a@a.com",
          rol: rolesEnum.USER,
        },
      },
    };

    wrapper = mount(<TestComponent />);

    expect(mockRouterPush).toHaveBeenCalledTimes(1);
  });
});
