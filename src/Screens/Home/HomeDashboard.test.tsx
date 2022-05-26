import { shallow, ShallowWrapper } from "enzyme";
import { Provider } from "react-redux";
import store from "../../store/store";
import { HomeDashboard } from "./HomeDashboard";
import { MainButton } from "../../components/Buttons/MainButton/MainButton";
import { useAppDispatch } from "../../Hooks/useAppHooks";

describe("Home Dashboard Tests", () => {
  let wrapper: ShallowWrapper;
  let dispatch_mock: jest.Mock;

  beforeEach(() => {
    dispatch_mock = useAppDispatch() as jest.Mock;
    wrapper = shallow(
      <Provider store={store}>
        <HomeDashboard />
      </Provider>
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
    wrapper.unmount();
  });

  it("When component is render, it must render 1 div and 1 log out button", () => {
    expect(wrapper.find(HomeDashboard).dive().find("div")).toHaveLength(1);
    expect(wrapper.find(HomeDashboard).dive().find(MainButton)).toHaveLength(1);
  });

  it("When log out is clicked, then it should change isLoggedIn to false", () => {
    // @ts-ignore
    wrapper.find(HomeDashboard).dive().find(MainButton).prop("onClick")();
    dispatch_mock();
    wrapper.update();
    expect(dispatch_mock).toBeCalled();
  });
});
