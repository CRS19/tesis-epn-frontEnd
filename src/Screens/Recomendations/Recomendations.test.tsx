import { shallow, ShallowWrapper } from "enzyme";
import { Provider } from "react-redux";
import store from "../../store/store";
import { Recomendations } from "./Recomendations";
import * as useAuthHook from "../../Hooks/useAuth";
import { useAppSelector } from "../../Hooks/useAppHooks";

describe("Recomendation tests", () => {
  let wrapper: ShallowWrapper;
  let use_auth_mock_response = {
    isLoggedIn: false,
  };
  let mock_store = store.getState();

  beforeEach(() => {
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
        <Recomendations />
      </Provider>
    );
  };

  it("When component is render, and user is not logged in, it should render an empty screen", () => {
    expect(wrapper.find(Recomendations).dive().find("div")).toHaveLength(0);
  });

  it("When component is render and user is logged in, it should render link device page", () => {
    jest.spyOn(useAuthHook, "useAuth").mockImplementation(() => ({
      ...use_auth_mock_response,
      isLoggedIn: true,
    }));

    mountComponent();

    expect(wrapper.find(Recomendations).dive().find("div")).toHaveLength(1);
  });
});
