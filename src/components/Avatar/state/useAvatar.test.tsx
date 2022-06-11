import { mount, ReactWrapper } from "enzyme";
import { act } from "react-dom/test-utils";
import { useAppSelector } from "../../../Hooks/useAppHooks";
import { EventTest } from "../../../Shared/Contants/Avatar";
import store from "../../../store/store";
import { useAvatar } from "./useAvatar";

describe("useAvatar test", () => {
  let wrapper: ReactWrapper;
  let spyOnOpenAvatarOptions: jest.SpyInstance;
  let spyOnCloseAvatarOptions: jest.SpyInstance;
  let spyLogOut: jest.SpyInstance;
  let mock_store = store.getState();

  const TestComponent = () => {
    const props = useAvatar();

    //@ts-ignore
    return <div {...props} />;
  };

  beforeEach(() => {
    (useAppSelector as jest.Mock).mockImplementation((fn) => fn(mock_store));

    wrapper = mount(<TestComponent />);

    spyOnOpenAvatarOptions = jest.spyOn(
      wrapper.childAt(0).props(),
      "openAvatarOptions"
    );

    spyOnCloseAvatarOptions = jest.spyOn(
      wrapper.childAt(0).props(),
      "closeAvatarOptions"
    );

    spyLogOut = jest.spyOn(wrapper.childAt(0).props(), "logOut");
  });

  afterEach(() => {
    wrapper.unmount();
    jest.clearAllMocks();

    (useAppSelector as jest.Mock).mockClear();
  });

  it("When the user do click on Avatar component, then openAvatarOptions should be called", () => {
    act(() => {
      wrapper.childAt(0).props().openAvatarOptions(EventTest);
    });

    expect(spyOnOpenAvatarOptions).toHaveBeenCalledTimes(1);
  });

  it("When the user do click on Avatar component to close, then closeAvatarOptions should be called", () => {
    act(() => {
      wrapper.childAt(0).props().closeAvatarOptions();
    });

    expect(spyOnCloseAvatarOptions).toHaveBeenCalledTimes(1);
  });

  it("When the user do click on logOut, then closeAvatarOptions should be called", () => {
    act(() => {
      wrapper.childAt(0).props().logOut();
    });

    expect(spyLogOut).toHaveBeenCalledTimes(1);
  });
});
