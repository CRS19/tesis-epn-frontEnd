import { mount, ReactWrapper } from "enzyme";
import { Provider } from "react-redux";
import store from "../../../store/store";
import { Avatar } from "../../Avatar/Avatar";
import { NavigationButtom } from "../../NavigationButtom/NavigationButtom";
import { WebTopBar } from "./WebTopBar";
import { IWebTopBarProps } from "./WebTopBar.interfaces";

const mockRouterPush = jest.fn();

jest.mock("next/router", () => ({
  useRouter: () => ({
    push: mockRouterPush,
  }),
}));

describe("WebTopBar tests", () => {
  let wrapper: ReactWrapper;
  let webTopBarProps: IWebTopBarProps = { width: 1440 };

  beforeEach(() => {
    mountComponent();
  });

  afterEach(() => {
    jest.clearAllMocks();
    // wrapper.unmount();
  });

  const mountComponent = () => {
    wrapper = mount(
      <Provider store={store}>
        <WebTopBar {...webTopBarProps} />
      </Provider>
    );
  };

  it("When te component is render, it should has 4 NavigationButtom 1 Avatar", () => {
    console.log(wrapper.debug());

    expect(wrapper.find(NavigationButtom).length).toEqual(4);
    expect(wrapper.find(Avatar).length).toEqual(1);
  });
});
