import { mount, ReactWrapper } from "enzyme";
import { act } from "react-dom/test-utils";
import { useAppSelector } from "../../../../Hooks/useAppHooks";
import { USER_TEST_OBJ } from "../../../../Shared/Contants/Tests";
import { IUser } from "../../../../Shared/Interfaces/User.interfaces";
import store from "../../../../store/store";
import { useMobileTopBar } from "./useMobileTopBar";

const mockRouterPush = jest.fn();

jest.mock("next/router", () => ({
  useRouter: () => ({
    push: mockRouterPush,
    pathname: "/linkDevice",
  }),
}));

describe("useMobileTopBar test", () => {
  let wrapper: ReactWrapper;
  let handle_open_close_menu_spy: jest.SpyInstance;
  let navigate_to_spy: jest.SpyInstance;
  let mock_current_user: IUser = USER_TEST_OBJ;
  let mock_store = {
    generalReducer: {
      ...store.getState(),
      currentUser: mock_current_user,
    },
  };

  const TestComponent = () => {
    const props = useMobileTopBar();

    //@ts-ignore
    return <div {...props} />;
  };

  beforeEach(() => {
    (useAppSelector as jest.Mock).mockImplementation((fn) => fn(mock_store));

    wrapper = mount(<TestComponent />);

    handle_open_close_menu_spy = jest.spyOn(
      wrapper.childAt(0).props(),
      "handleOpenCloseMemu"
    );
  });

  afterEach(() => {
    wrapper.unmount();
    jest.clearAllMocks();
    (useAppSelector as jest.Mock).mockClear();
  });

  it("When user click on hamburger btn, then handleOpenCloseMemu should be called", () => {
    act(() => {
      wrapper.childAt(0).props().handleOpenCloseMemu(true);
    });

    expect(handle_open_close_menu_spy).toHaveBeenCalledWith(true);
  });

  it("When user click on nav btn, then navigateTo should be called", () => {
    mock_store = {
      generalReducer: {
        ...store.getState(),
        currentUser: { ...mock_current_user, idDevice: "" },
      },
    };

    wrapper = mount(<TestComponent />);

    navigate_to_spy = jest.spyOn(wrapper.childAt(0).props(), "navigateTo");

    act(() => {
      wrapper.childAt(0).props().navigateTo(1);
    });

    expect(navigate_to_spy).toHaveBeenCalledWith(1);
  });
});
