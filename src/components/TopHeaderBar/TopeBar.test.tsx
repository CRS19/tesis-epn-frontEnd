import { shallow, ShallowWrapper } from "enzyme";
import { Provider } from "react-redux";
import store from "../../store/store";
import { TopBar } from "./TopBar";
import * as useWindowsDimensionsHook from "../../Hooks/useWindowDimensions";
import { WebTopBar } from "./WebTopBar/WebTopBar";
import { MobileTopBar } from "./MobileTopBar/MobileTopBar";

describe("TobBar tests", () => {
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
        <TopBar />
      </Provider>
    );
  };

  it("When the component is render with a desk screen, it should render WebTopBar", () => {
    jest
      .spyOn(useWindowsDimensionsHook, "useWindowDimensions")
      .mockImplementation(() => ({ width: 1440, height: 1080 }));

    mountComponent();

    expect(wrapper.find(TopBar).dive().find(WebTopBar)).toHaveLength(1);
  });

  it("When the component is render with a mobile screen, it should render MobileTopBar", () => {
    jest
      .spyOn(useWindowsDimensionsHook, "useWindowDimensions")
      .mockImplementation(() => ({ width: 700, height: 1080 }));

    mountComponent();

    expect(wrapper.find(TopBar).dive().find(MobileTopBar)).toHaveLength(1);
  });
});
