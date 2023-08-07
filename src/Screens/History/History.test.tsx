import { shallow, ShallowWrapper } from "enzyme";
import { Provider } from "react-redux";
import store from "../../store/store";
import { useAppDispatch, useAppSelector } from "../../Hooks/useAppHooks";
import * as useHistoryHook from "./state/useHistory";
import { IUseHistory } from "./state/useHistory.interfaces";
import { History } from "./History";

describe("History Tests", () => {
  let wrapper: ShallowWrapper;
  let dispatch_mock: jest.Mock;
  let use_history_mock_response: IUseHistory = {
    isLoggedIn: false,
  };
  let mock_store = store.getState();

  beforeEach(() => {
    dispatch_mock = useAppDispatch() as jest.Mock;
    (useAppSelector as jest.Mock).mockImplementation((fn) => fn(mock_store));

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
    expect(wrapper.find(History).dive().find("div")).toHaveLength(0);
  });

  it("When component is render and user is logged in, it should render one TopBar, one BackgroundHistoryPage and one ContactsTable", () => {
    jest.spyOn(useHistoryHook, "useHistory").mockImplementation(() => ({
      ...use_history_mock_response,
      isLoggedIn: true,
      contacts: [],
    }));

    mountComponent();

    expect(wrapper.find(History).dive().find("TopBar")).toHaveLength(1);
    expect(
      wrapper.find(History).dive().find("BackgroundHistoryPage")
    ).toHaveLength(1);
    expect(wrapper.find(History).dive().find("ContactsTable")).toHaveLength(1);
    expect(
      wrapper.find(History).dive().find("ContactsTable").props()
    ).toHaveProperty("contacts", []);
  });
});
