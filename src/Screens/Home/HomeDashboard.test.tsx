import { shallow, ShallowWrapper } from "enzyme";
import { Provider } from "react-redux";
import store from "../../store/store";
import { HomeDashboard } from "./HomeDashboard";
import { useAppDispatch } from "../../Hooks/useAppHooks";
import * as useHomeDashbaoardHook from "./state/useHome";
import { IUseHome } from "./state/useHome.interfaces";
import { TopBar } from "../../components/TopHeaderBar/TopBar";

describe("Home Dashboard Tests", () => {
  let wrapper: ShallowWrapper;
  let dispatch_mock: jest.Mock;
  let log_out = jest.fn();
  let use_home_response: IUseHome = {
    isLoggedIn: true,
    logOut: log_out,
  };

  beforeEach(() => {
    dispatch_mock = useAppDispatch() as jest.Mock;
    mountComponent();
  });

  afterEach(() => {
    jest.clearAllMocks();
    wrapper.unmount();
  });

  const mountComponent = () => {
    wrapper = shallow(
      <Provider store={store}>
        <HomeDashboard />
      </Provider>
    );
  };

  const mockUseHomeHook = () => {
    jest
      .spyOn(useHomeDashbaoardHook, "useHome")
      .mockImplementation(() => use_home_response);
  };

  it("When component is render, it must render 1 Topbar and 1 log out button", () => {
    // @ts-ignore
    mockUseHomeHook();
    mountComponent();

    dispatch_mock();

    expect(dispatch_mock).toBeCalled();
    expect(wrapper.find(HomeDashboard).dive().find(TopBar).length).toEqual(1);
  });
});
