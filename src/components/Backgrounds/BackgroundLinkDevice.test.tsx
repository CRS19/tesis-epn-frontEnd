import { mount, ReactWrapper } from "enzyme";
import { Provider } from "react-redux";
import store from "../../store/store";
import { BackgroundLinkDevice } from "./BackgroundLinkDevice";

describe("Background Link Device tests", () => {
  let wrapper: ReactWrapper;

  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <BackgroundLinkDevice />
      </Provider>
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
    wrapper.unmount();
  });

  it("When the component is render, it should have 1 BackgroundLinkDevice", () => {
    expect(wrapper.find(BackgroundLinkDevice).length).toEqual(1);
  });
});
