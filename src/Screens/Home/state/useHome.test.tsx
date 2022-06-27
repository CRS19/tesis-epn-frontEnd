import { mount, ReactWrapper } from "enzyme";
import { useAppSelector } from "../../../Hooks/useAppHooks";
import store from "../../../store/store";
import { useHome } from "./useHome";
import { act } from "react-dom/test-utils";
import * as useHomeHook from "./useHome";
import * as useSocketHook from "../../../Hooks/useSocket";
import { USER_TEST_OBJ } from "../../../Shared/Contants/Tests";
import { RoutesEnum } from "../../../Shared/Enums/Routes";

const mockRouterPush = jest.fn();

jest.mock("next/router", () => ({
  useRouter: () => ({
    push: mockRouterPush,
  }),
}));

describe("useHome tests", () => {
  let wrapper: ReactWrapper;
  let spyState: jest.SpyInstance;
  let mock_store = store.getState();
  let onCloseAlertSickModalPropsSpyOn: jest.SpyInstance;
  let openAlertSickModal: jest.SpyInstance;
  let closeHealthModalSpyOn: jest.SpyInstance;
  let openHealthModalSpyOn: jest.SpyInstance;
  let setHealthSpyOn: jest.SpyInstance;
  let closeSickModalSpyOn: jest.SpyInstance;
  let openSickModalSpyOn: jest.SpyInstance;
  let setSickSpyOn: jest.SpyInstance;

  const TestComponent = () => {
    const props = useHome();

    //@ts-ignore
    return <div {...props} />;
  };

  beforeEach(() => {
    (useAppSelector as jest.Mock).mockImplementation((fn) => fn(mock_store));
    mock_useSocket(true);

    wrapper = mount(<TestComponent />);

    spyState = jest.spyOn(useHomeHook, "useHome");
    onCloseAlertSickModalPropsSpyOn = jest.spyOn(
      wrapper.childAt(0).props().alertSickModalProps,
      "onClose"
    );
    openAlertSickModal = jest.spyOn(
      wrapper.childAt(0).props(),
      "openAlertSickModal"
    );
    closeHealthModalSpyOn = jest.spyOn(
      wrapper.childAt(0).props().HealthModalProps,
      "onClose"
    );
    openHealthModalSpyOn = jest.spyOn(
      wrapper.childAt(0).props(),
      "openHealthModal"
    );
    setHealthSpyOn = jest.spyOn(
      wrapper.childAt(0).props().HealthModalProps,
      "onYesPress"
    );
    closeSickModalSpyOn = jest.spyOn(
      wrapper.childAt(0).props().sickModalPorps,
      "onClose"
    );
    openSickModalSpyOn = jest.spyOn(
      wrapper.childAt(0).props(),
      "openSickModal"
    );
    setSickSpyOn = jest.spyOn(
      wrapper.childAt(0).props().sickModalPorps,
      "onYesPress"
    );
  });

  afterEach(() => {
    wrapper.unmount();
    jest.clearAllMocks();
    spyState.mockClear();
    (useAppSelector as jest.Mock).mockClear();
    mockRouterPush.mockClear();
  });

  const mock_useSocket = (isSocketDefined: boolean) => {
    const socket = jest
      .spyOn(useSocketHook, "useSocket")
      .mockImplementation(() =>
        isSocketDefined
          ? ({
              emit: jest.fn(),
              on: jest.fn(),
            } as any)
          : undefined
      );

    return socket;
  };

  it("should render correctly", () => {
    console.log(wrapper.debug());

    expect(wrapper.find("div").length).toBe(1);
  });

  it("When user close alert sick modal, then closeAlertSickModal should be called", () => {
    act(() => {
      wrapper.childAt(0).props().alertSickModalProps.onClose();
    });

    expect(onCloseAlertSickModalPropsSpyOn).toHaveBeenCalledTimes(1);
  });

  it("When user cles alert sick modal, then openAlertSickModal should be called", () => {
    act(() => {
      wrapper.childAt(0).props().openAlertSickModal();
    });

    expect(openAlertSickModal).toHaveBeenCalledTimes(1);
  });

  it("When user close health modal, then closeHealthModal should be called", () => {
    act(() => {
      wrapper.childAt(0).props().openAlertSickModal();
    });

    expect(openAlertSickModal).toHaveBeenCalledTimes(1);
  });

  it("When the user close health modal, then closeHealthModalSpyOn should be called", () => {
    act(() => {
      wrapper.childAt(0).props().HealthModalProps.onClose();
    });

    expect(closeHealthModalSpyOn).toHaveBeenCalledTimes(1);
  });

  it("When user open health modal, then openHealthModalSpyOn should be called", () => {
    act(() => {
      wrapper.childAt(0).props().openHealthModal();
    });

    expect(openHealthModalSpyOn).toHaveBeenCalledTimes(1);
  });

  it("When user do click on yes btn in health modal, then setHealth should be called", () => {
    act(() => {
      wrapper.childAt(0).props().HealthModalProps.onYesPress();
    });

    expect(setHealthSpyOn).toHaveBeenCalledTimes(1);
  });

  it("When user close sick modal, then closeSickModal should be called", () => {
    act(() => {
      wrapper.childAt(0).props().sickModalPorps.onClose();
    });

    expect(closeSickModalSpyOn).toHaveBeenCalledTimes(1);
  });

  it("When user open sick modal, then openSickModalSpyOn should be called", () => {
    act(() => {
      wrapper.childAt(0).props().openSickModal();
    });

    expect(openSickModalSpyOn).toHaveBeenCalledTimes(1);
  });

  it("Wehn user do click on yes btn of sick modal, then setSickSpyOn should be called", () => {
    act(() => {
      wrapper.childAt(0).props().sickModalPorps.onYesPress();
    });

    expect(setSickSpyOn).toHaveBeenCalledTimes(1);
  });

  it("When user is not undefined, it should call push method", () => {
    wrapper.unmount();
    mock_store = {
      generalReducer: {
        ...store.getState().generalReducer,
        isLoggedIn: true,
        currentUser: { ...USER_TEST_OBJ, idDevice: "" },
      },
    };

    wrapper = mount(<TestComponent />);

    expect(mockRouterPush).toHaveBeenCalledWith(RoutesEnum.LINK_DEVICE);
  });

  it("When currentUser has an idDevice, mockRouterPush should not be called", () => {
    mockRouterPush.mockClear();
    wrapper.unmount();
    mock_store = {
      generalReducer: {
        ...store.getState().generalReducer,
        isLoggedIn: true,
        currentUser: { ...USER_TEST_OBJ, idDevice: "123" },
      },
    };

    wrapper = mount(<TestComponent />);

    expect(mockRouterPush).not.toHaveBeenCalled();
  });

  it("When sokcet is not defined, component should mounted", () => {
    wrapper.unmount();
    mock_useSocket(false);

    wrapper = mount(<TestComponent />);

    expect(wrapper.find("div").length).toBe(1);
  });

  it("When socket is defined and it has a call, then user has to be reloaded", () => {
    wrapper.unmount();

    const socket = mock_useSocket(true);

    wrapper = mount(<TestComponent />);

    // @ts-ignore
    socket.getMockImplementation()?.call()?.on();

    wrapper.update();

    console.log(wrapper.childAt(0).debug());
  });
});
