import { shallow, ShallowWrapper } from "enzyme";
import { Provider } from "react-redux";
import store from "../../store/store";
import { useAppDispatch } from "../../Hooks/useAppHooks";
import * as useHistoryHook from "./state/useHistory";
import { IUseHistory } from "./state/useHistory.interfaces";
import { History } from "./History";

describe("History Tests", () => {
  let wrapper: ShallowWrapper;
  let dispatch_mock: jest.Mock;
  let use_history_mock_response: IUseHistory = {
    isLoggedIn: false,
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
        <History />
      </Provider>
    );
  };

  it("When component is render, and user is not logged in, it should render an empty screen", () => {
    console.log(wrapper.find(History).dive().debug());
    expect(wrapper.find(History).dive().find("div")).toHaveLength(0);
  });

  it("When component is render and user is logged in, it should render link device page", () => {
    jest.spyOn(useHistoryHook, "useHistory").mockImplementation(() => ({
      ...use_history_mock_response,
      isLoggedIn: true,
    }));

    mountComponent();

    expect(wrapper.find(History).dive().find("div")).toHaveLength(1);
  });
});
