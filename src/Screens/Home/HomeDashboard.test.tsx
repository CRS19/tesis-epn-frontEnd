import { shallow, ShallowWrapper } from "enzyme";
import { Provider } from "react-redux";
import store from "../../store/store";
import { HomeDashboard } from "./HomeDashboard";
import { useAppDispatch } from "../../Hooks/useAppHooks";
import * as useHomeDashbaoardHook from "./state/useHome";
import { IUseHome } from "./state/useHome.interfaces";
import { TopBar } from "../../components/TopHeaderBar/TopBar";
import { USER_TEST_OBJ } from "../../Shared/Contants/Tests";
import { act } from "@testing-library/react";
import { MainButton } from "../../components/Buttons/MainButton/MainButton";
import { set } from "lodash";
import { Zoom } from "@mui/material";

describe("Home Dashboard Tests", () => {
  let wrapper: ShallowWrapper;
  let dispatch_mock: jest.Mock;
  let sickModalOnCloseMock = jest.fn();
  let sickModalOnYessPressMock = jest.fn();
  let healthModalOnCloseMock = jest.fn();
  let healthModalOnYesPressMock = jest.fn();
  let possibleSickModalOnCloseMock = jest.fn();
  let openHealthModalMock = jest.fn();
  let openSickModalMock = jest.fn();
  let openAlertSickModalMock = jest.fn();
  let use_home_response: IUseHome = {
    isLoggedIn: true,
    isLoading: false,
    currentUser: USER_TEST_OBJ,
    sickModalPorps: {
      isOpen: false,
      title: "title",
      subTitle: "subtitle",
      onClose: sickModalOnCloseMock,
      onYesPress: sickModalOnYessPressMock,
    },
    HealthModalProps: {
      isOpen: false,
      title: "titleHealthModal",
      subTitle: "subtitleHeathModal",
      onClose: healthModalOnCloseMock,
      onYesPress: healthModalOnYesPressMock,
    },
    alertSickModalProps: {
      isOpen: false,
      onClose: possibleSickModalOnCloseMock,
    },
    openSickModal: openSickModalMock,
    openHealthModal: openHealthModalMock,
    openAlertSickModal: openAlertSickModalMock,
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

  // test that simulates a click on MainButton  and it should call the logOut function
  it("When MainButton is clicked, then it should print some in console", () => {
    mockUseHomeHook();
    mountComponent();

    dispatch_mock();

    act(() => {
      wrapper.find(HomeDashboard).dive().find(MainButton).simulate("click");
    });

    expect(wrapper.find(HomeDashboard).dive().find(TopBar).length).toEqual(1);
  });

  it("When isSick property is true, then MainButton should has text Reportarse sano", () => {
    set(use_home_response, "currentUser.isSick", true);

    mockUseHomeHook();
    mountComponent();

    dispatch_mock();

    expect(
      wrapper.find(HomeDashboard).dive().find(MainButton).props().btnText
    ).toEqual("Reportarse Sano");
  });

  it("When isPossibleSick property is true, then Zoom should be render", () => {
    set(use_home_response, "currentUser.isPossibleSick", true);

    mockUseHomeHook();
    mountComponent();

    dispatch_mock();

    expect(wrapper.find(HomeDashboard).dive().find(Zoom).length).toEqual(1);
  });
});
