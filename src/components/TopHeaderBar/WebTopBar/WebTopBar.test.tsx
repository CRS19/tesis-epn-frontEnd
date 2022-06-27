import { mount, ReactWrapper } from "enzyme";
import { Provider } from "react-redux";
import { useAppSelector } from "../../../Hooks/useAppHooks";
import { USER_TEST_OBJ } from "../../../Shared/Contants/Tests";
import { IUser } from "../../../Shared/Interfaces/User.interfaces";
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
  let mock_current_user: IUser = USER_TEST_OBJ;
  let mock_store = {
    generalReducer: {
      ...store.getState(),
      currentUser: { ...mock_current_user, idDevice: "" },
    },
  };

  beforeEach(() => {
    (useAppSelector as jest.Mock).mockImplementation((fn) => fn(mock_store));

    mountComponent();
  });

  afterEach(() => {
    jest.clearAllMocks();
    mockRouterPush.mockClear();
    wrapper.unmount();
  });

  const mountComponent = () => {
    wrapper = mount(
      <Provider store={store}>
        <WebTopBar {...webTopBarProps} />
      </Provider>
    );
  };

  it("When te component is render, it should has 4 NavigationButtom 1 Avatar", () => {
    expect(wrapper.find(NavigationButtom).length).toEqual(4);
    expect(wrapper.find(Avatar).length).toEqual(1);
  });

  it("When the user has linked an idDevice, then last NavigationButtom should get Desvincular as title", () => {
    mock_store = {
      generalReducer: {
        ...store.getState(),
        currentUser: { ...mock_current_user, idDevice: "123" },
      },
    };
    mountComponent();

    expect(wrapper.find(NavigationButtom).last().prop("title")).toEqual(
      "Desvincular"
    );
  });
});
