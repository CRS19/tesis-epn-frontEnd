import { mount, ReactWrapper } from "enzyme";
import { Provider } from "react-redux";
import store from "../../store/store";
import { IconsHeader } from "./IconsHeader";

describe("IconsHeader Tests", () => {
  let wrapper: ReactWrapper;

  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <IconsHeader />
      </Provider>
    );
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("When the component is rendered, it should exist 2 logos", () => {
    const fisLogo = "../../../assets/FIS-logo.png";
    const epnLogo = "../../../assets/EPN-logo.png";

    expect(wrapper.find("img").at(0).prop("src")).toEqual(fisLogo);
    expect(wrapper.find("img").at(1).prop("src")).toEqual(epnLogo);
  });
});
