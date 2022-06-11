import { mount, ReactWrapper } from "enzyme";
import { useNavigationButtom } from "./useNavigationButtom";
import { act } from "react-dom/test-utils";
import { RoutesEnum } from "../../../Shared/Enums/Routes";

const mockRouterPush = jest.fn();

jest.mock("next/router", () => ({
  useRouter: () => ({
    push: mockRouterPush,
  }),
}));

describe("useNavigationButtom tests", () => {
  let wrapper: ReactWrapper;
  let spyOnNavigateToPath: jest.SpyInstance;

  const TestComponent = () => {
    const props = useNavigationButtom();

    // @ts-ignore
    return <div {...props} />;
  };

  beforeEach(() => {
    wrapper = mount(<TestComponent />);

    spyOnNavigateToPath = jest.spyOn(
      wrapper.childAt(0).props(),
      "navigateToPath"
    );
  });

  afterEach(() => {
    wrapper.unmount();
    jest.clearAllMocks();
  });

  it("When user do click on navButtom, then navigateToPath should be called", () => {
    act(() => {
      wrapper.childAt(0).props().navigateToPath(RoutesEnum.HISTORY);
    });

    wrapper.update();

    expect(spyOnNavigateToPath).toHaveBeenCalled();
  });
});
