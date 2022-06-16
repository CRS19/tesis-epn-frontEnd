import { shallow, ShallowWrapper } from "enzyme";
import { Provider } from "react-redux";
import store from "../../store/store";
import { useAppDispatch, useAppSelector } from "../../Hooks/useAppHooks";
import * as useLinkDevice from "./state/useLinkDevice";
import { LinkDevice } from "./LinkDevice";
import { IUseLinkDevice } from "./state/useLinkDevice.interfaces";
import { Grid } from "@mui/material";

describe("LinkDevice Tests", () => {
  let wrapper: ShallowWrapper;
  let dispatch_mock: jest.Mock;
  let handle_input_id_device_mock = jest.fn();
  let on_submit_mock = jest.fn();
  let mock_store = store.getState();
  let use_link_device_mock_response: IUseLinkDevice = {
    errorForm: {
      error: false,
      textError: "error txt",
    },
    isLoading: false,
    isLoggedIn: false,
    idDevice: "1234",
    currentUserHasIdDevice: true,
    handleInputIdDevice: handle_input_id_device_mock,
    onSubmit: on_submit_mock,
  };

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

    expect(wrapper.find(LinkDevice).dive().find(Grid)).toHaveLength(3);
  });
});
