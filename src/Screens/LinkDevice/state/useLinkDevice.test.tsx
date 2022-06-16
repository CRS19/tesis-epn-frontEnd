import { mount, ReactWrapper } from "enzyme";
import { useAppSelector } from "../../../Hooks/useAppHooks";
import store from "../../../store/store";
import { useLinkDevice } from "./useLinkDevice";
import * as hook from "./useLinkDevice";
import { act } from "react-dom/test-utils";
import { rolesEnum } from "../../../Shared/Enums/Roles";

const mockRouterPush = jest.fn();

jest.mock("next/router", () => ({
  useRouter: () => ({
    push: mockRouterPush,
  }),
}));

describe("useLinkDevice test", () => {
  let wrapper: ReactWrapper;
  let mock_store = store.getState();
  let spyState: jest.SpyInstance;
  let spyHandleInputIdDevice: jest.SpyInstance;
  let spyOnSubmit: jest.SpyInstance;
  let currentUserMock = {
    fullName: "Cris Flores",
    idDevice: "",
    isDevice: false,
    isPossibleSick: false,
    isSick: false,
    mail: "a@a.com",
    rol: rolesEnum.USER,
  };

  const TestComponent = () => {
    const props = useLinkDevice();

    // @ts-ignore
    return <div {...props} />;
  };

  beforeEach(() => {
    (useAppSelector as jest.Mock).mockImplementation((fn) => fn(mock_store));

    console.log(mock_store);
    mountComponent();
  });

  afterEach(() => {
    wrapper.unmount();
    jest.clearAllMocks();
    spyState.mockClear();
    (useAppSelector as jest.Mock).mockClear();
  });

  const mountComponent = () => {
    wrapper = mount(<TestComponent />);
    spyState = jest.spyOn(hook, "useLinkDevice");

    spyHandleInputIdDevice = jest.spyOn(
      wrapper.childAt(0).props(),
      "handleInputIdDevice"
    );
    spyOnSubmit = jest.spyOn(wrapper.childAt(0).props(), "onSubmit");
  };

  it("When idDevice has change, then handleInputIdDevice should be called", () => {
    act(() => {
      wrapper.childAt(0).props().handleInputIdDevice("idDevice");
    });

    expect(spyHandleInputIdDevice).toHaveBeenCalledWith("idDevice");
  });

  it("When idDevice is not valid and onSubmit has been called, then it onSubmit should be called", () => {
    act(() => {
      wrapper.childAt(0).props().onSubmit();
    });

    expect(spyOnSubmit).toHaveBeenCalled();
  });

  it("When idDevice is valid and onSubmit has been called, then it onSubmit should be called", () => {
    wrapper.unmount();
    mock_store = {
      generalReducer: {
        ...store.getState().generalReducer,
        isLoading: undefined,
        currentUser: currentUserMock,
      },
    };

    mountComponent();

    act(() => {
      wrapper.childAt(0).props().handleInputIdDevice("idDevice");
    });

    act(() => {
      wrapper.childAt(0).props().onSubmit();
    });

    expect(spyOnSubmit).toHaveBeenCalled();
  });

  it("When user already has an idDevice and idDeviceInput has a value and onSubmit has been called, then it onSubmit should be called", () => {
    wrapper.unmount();
    mock_store = {
      generalReducer: {
        ...store.getState().generalReducer,
        isLoading: undefined,
        currentUser: { ...currentUserMock, idDevice: "123" },
      },
    };

    mountComponent();

    act(() => {
      wrapper.childAt(0).props().handleInputIdDevice("idDevice");
    });

    act(() => {
      wrapper.childAt(0).props().onSubmit();
    });

    expect(spyOnSubmit).toHaveBeenCalled();
  });

  it("When user already has no idDevice and idDeviceInput is valid and onSubmit has been called, then it onSubmit should be called", () => {
    wrapper.unmount();
    mock_store = {
      generalReducer: {
        ...store.getState().generalReducer,
        isLoading: undefined,
        currentUser: { ...currentUserMock, idDevice: "" },
      },
    };

    mountComponent();

    act(() => {
      wrapper.childAt(0).props().handleInputIdDevice("123");
    });
    wrapper.update();
    spyOnSubmit = jest.spyOn(wrapper.childAt(0).props(), "onSubmit");

    act(() => {
      wrapper.childAt(0).props().onSubmit();
    });

    expect(spyOnSubmit).toHaveBeenCalled();
  });
});
