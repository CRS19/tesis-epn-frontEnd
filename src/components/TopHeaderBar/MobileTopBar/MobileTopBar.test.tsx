import { MobileTopBar } from "./MobileTopBar";
import { shallow, ShallowWrapper } from "enzyme";
import store from "../../../store/store";
import { Provider } from "react-redux";
import { useAppSelector } from "../../../Hooks/useAppHooks";
import { act } from "react-dom/test-utils";
import {
  ButtonBase,
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";
import { HamburgerSVG } from "../../../../public/assets/svg/HamburgerSVG";
import { IUseMobileTopBar } from "./state/useMobileTopBar.interfaces";
import { ROUTES_ARRAY } from "../../../Shared/Contants/Paths";
import { RoutesEnum } from "../../../Shared/Enums/Routes";
import * as useMobileTopBarHook from "./state/useMobileTopBar";

const mockRouterPush = jest.fn();

jest.mock("next/router", () => ({
  useRouter: () => ({
    push: mockRouterPush,
    pathname: "/",
  }),
}));

describe("MobileTopBar tests", () => {
  let wrapper: ShallowWrapper;
  let mock_store = store.getState();
  let use_mobile_top_bar = beforeEach(() => {
    mountComponent();
  });
  let handle_open_close_menu_mock = jest.fn();
  let navigate_to_mock = jest.fn();
  let use_mobile_top_bar_response: IUseMobileTopBar = {
    openMenu: false,
    routesArray: ROUTES_ARRAY,
    currentPath: RoutesEnum.HOME,
    handleOpenCloseMemu: handle_open_close_menu_mock,
    navigateTo: navigate_to_mock,
  };

  afterEach(() => {
    wrapper.unmount();
    jest.clearAllMocks();
    mockRouterPush.mockClear();
  });

  const mountComponent = () => {
    (useAppSelector as jest.Mock).mockImplementation((fn) => fn(mock_store));

    wrapper = shallow(
      <Provider store={store}>
        <MobileTopBar />
      </Provider>
    );
  };

  it("When the component is render, it should render a div", () => {
    expect(wrapper.find(MobileTopBar).at(0).dive().find(Grid).length).toEqual(
      4
    );
    expect(
      wrapper.find(MobileTopBar).at(0).dive().find(ButtonBase).length
    ).toEqual(1);
    expect(
      wrapper.find(MobileTopBar).at(0).dive().find(HamburgerSVG).length
    ).toEqual(1);
    expect(wrapper.find(MobileTopBar).at(0).dive().find(Drawer).length).toEqual(
      1
    );
    expect(
      wrapper.find(MobileTopBar).at(0).dive().find(Divider).length
    ).toEqual(6);
    expect(wrapper.find(MobileTopBar).at(0).dive().find(List).length).toEqual(
      1
    );
    expect(
      wrapper.find(MobileTopBar).at(0).dive().find(ListItem).length
    ).toEqual(4);
  });

  it("When ButtonBase is clicked, then currentPath should change", () => {
    handle_open_close_menu_mock.mockImplementation(() => {
      use_mobile_top_bar_response = {
        ...use_mobile_top_bar_response,
        openMenu: true,
      };
    });
    jest
      .spyOn(useMobileTopBarHook, "useMobileTopBar")
      .mockImplementation(() => use_mobile_top_bar_response);

    act(() => {
      // @ts-ignore
      wrapper.find(MobileTopBar).dive().find(ButtonBase).prop("onClick")();
    });

    wrapper.update();

    expect(handle_open_close_menu_mock).toHaveBeenCalled();
    expect(
      wrapper.find(MobileTopBar).dive().find(Drawer).first().props().open
    ).toEqual(true);
  });

  it("When user click outside from drawer, then it should be closed", () => {
    handle_open_close_menu_mock.mockImplementation(() => {
      use_mobile_top_bar_response = {
        ...use_mobile_top_bar_response,
        openMenu: false,
      };
    });
    jest
      .spyOn(useMobileTopBarHook, "useMobileTopBar")
      .mockImplementation(() => use_mobile_top_bar_response);

    act(() => {
      // @ts-ignore
      wrapper.find(MobileTopBar).dive().find(Drawer).prop("onClose")();
    });

    expect(handle_open_close_menu_mock).toHaveBeenCalled();
    expect(
      wrapper.find(MobileTopBar).dive().find(Drawer).first().props().open
    ).toEqual(false);
  });

  it("When user click on navoptions buttom, then it should navigate to that path", () => {
    navigate_to_mock.mockImplementation(() => {
      use_mobile_top_bar_response = {
        ...use_mobile_top_bar_response,
        currentPath: "/home",
      };
    });
    jest
      .spyOn(useMobileTopBarHook, "useMobileTopBar")
      .mockImplementation(() => use_mobile_top_bar_response);

    act(() => {
      // @ts-ignore
      wrapper
        .find(MobileTopBar)
        .dive()
        .find(ListItemButton)
        .first()
        .prop("onClick")();
    });

    expect(navigate_to_mock).toHaveBeenCalled();
  });
});
