import { mount, ReactWrapper } from "enzyme";
import { Provider } from "react-redux";
import store from "../../store/store";
import { BackgroundHomeScreen } from "./BackgroundHomeScreen";

describe("Background Home Screen tests", () => {
  let wrapper: ReactWrapper;

  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <BackgroundHomeScreen />
      </Provider>
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
    wrapper.unmount();
  });

  it("When the component is render, it should have 1 BackgroundHomeScreen", () => {
    expect(wrapper.find(BackgroundHomeScreen).length).toEqual(1);
  });
});
