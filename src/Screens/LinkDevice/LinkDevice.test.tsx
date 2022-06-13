import { shallow, ShallowWrapper } from "enzyme";
import { Provider } from "react-redux";
import store from "../../store/store";
import { useAppDispatch } from "../../Hooks/useAppHooks";
import * as useLinkDevice from "./state/useLinkDevice";
import { LinkDevice } from "./LinkDevice";
import { IUseLinkDevice } from "./state/useLinkDevice.interfaces";

describe("LinkDevice Tests", () => {
  let wrapper: ShallowWrapper;
  let dispatch_mock: jest.Mock;
  let use_link_device_mock_response: IUseLinkDevice = {
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
        <LinkDevice />
      </Provider>
    );
  };

  it("When component is render, and user is not logged in, it should render an empty screen", () => {
    expect(wrapper.find(LinkDevice).dive().find("div")).toHaveLength(0);
  });

  it("When component is render and user is logged in, it should render link device page", () => {
    jest.spyOn(useLinkDevice, "useLinkDevice").mockImplementation(() => ({
      ...use_link_device_mock_response,
      isLoggedIn: true,
    }));

    mountComponent();

    expect(wrapper.find(LinkDevice).dive().find("div")).toHaveLength(1);
  });
});
