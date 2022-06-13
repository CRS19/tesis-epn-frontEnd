import { Box, Typography } from "@mui/material";
import { mount, ReactWrapper } from "enzyme";
import { Provider } from "react-redux";
import { RoutesEnum } from "../../Shared/Enums/Routes";
import store from "../../store/store";
import { act } from "react-dom/test-utils";
import { NavigationButtom } from "./NavigationButtom";
import * as useNavigationButtomHook from "./state/useNavigationButtom";

const mockRouterPush = jest.fn();

jest.mock("next/router", () => ({
  useRouter: () => ({
    push: mockRouterPush,
    pathname: "/",
  }),
}));

describe("NavigationButtom tests", () => {
  let wrapper: ReactWrapper;
  let navigate_to_path_mock = jest.fn();
  let use_navigation_buttom_hook = {
    pathName: RoutesEnum.HISTORY,
    navigateToPath: navigate_to_path_mock,
  };
  let navigation_buttom_props = {
    title: "title",
    navigateTo: RoutesEnum.HOME,
    path: RoutesEnum.HOME,
    windowWidth: 30,
    width: undefined,
  };

  beforeEach(() => {
    mountComponent();
  });

  afterEach(() => {
    wrapper.unmount();
  });

  const mountComponent = () => {
    wrapper = mount(
      <Provider store={store}>
        <NavigationButtom {...navigation_buttom_props} />
      </Provider>
    );
  };

  it("When the component is render, then ", () => {
    jest
      .spyOn(useNavigationButtomHook, "useNavigationButtom")
      .mockImplementation(() => ({
        ...use_navigation_buttom_hook,
      }));

    mountComponent();

    act(() => {
      //@ts-ignore
      wrapper.find(Typography).props().onClick();
    });

    wrapper.update();

    expect(wrapper.find(Box).length).toEqual(1);
    expect(wrapper.find(Typography).length).toEqual(1);
    expect(wrapper.find(Typography).at(0).text()).toEqual("title");
  });
});
