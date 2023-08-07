import { mount, ReactWrapper } from "enzyme";
import { Provider } from "react-redux";
import store from "../../store/store";
import { BackgroundHistoryPage } from "./BackgroundHistoryPage";

describe("Background Home Screen tests", () => {
  let wrapper: ReactWrapper;

  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <BackgroundHistoryPage />
      </Provider>
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
    wrapper.unmount();
  });

  it("When the component is render, it should have 1 BackgroundHomeScreen", () => {
    expect(wrapper.find(BackgroundHistoryPage).length).toEqual(1);
  });
});
