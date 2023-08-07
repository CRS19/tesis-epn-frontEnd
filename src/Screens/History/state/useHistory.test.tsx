import { ReactWrapper, mount } from "enzyme";
import { useHistory } from "./useHistory";
import { useAppSelector } from "../../../Hooks/useAppHooks";
import * as useHistoryHook from "./useHistory";
import store from "../../../store/store";

const mockRouterPush = jest.fn();

jest.mock("next/router", () => ({
  useRouter: () => ({
    push: mockRouterPush,
  }),
}));

describe("useHistory tests -", () => {
  let wrapper: ReactWrapper;
  let mock_store = store.getState();
  let spyState: jest.SpyInstance;

  const TestComponent = () => {
    const props = useHistory();

    // @ts-ignore
    return <div {...props} />;
  };

  beforeEach(() => {
    (useAppSelector as jest.Mock).mockImplementation((fn) => fn(mock_store));
    wrapper = mount(<TestComponent />);

    spyState = jest.spyOn(useHistoryHook, "useHistory");
  });

  afterEach(() => {
    jest.clearAllMocks();
    (useAppSelector as jest.Mock).mockClear();
  });

  it("should render correctly", () => {
    console.log(wrapper.debug());

    expect(wrapper.find("div").length).toBe(1);
  });
});
