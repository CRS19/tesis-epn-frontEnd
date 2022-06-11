import { MobileTopBar } from "./MobileTopBar";
import { shallow, ShallowWrapper } from "enzyme";
import store from "../../../store/store";
import { Provider } from "react-redux";

describe("MobileTopBar tests", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    mountComponent();
  });

  afterEach(() => {
    jest.clearAllMocks();
    wrapper.unmount();
  });

  const mountComponent = () => {
    wrapper = shallow(
      <Provider store={store}>
        <MobileTopBar />
      </Provider>
    );
  };

  it("When the component is render, it should render a div", () => {
    expect(wrapper.find(MobileTopBar).at(0).dive().find("div").length).toEqual(
      1
    );
  });
});
