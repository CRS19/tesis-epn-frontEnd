import { shallow, ShallowWrapper } from "enzyme";
import Login from "./Login";
import { Provider } from "react-redux";
import store from "../../store/store";
import { IconsHeader } from "../../components/IconsHeader/IconsHeader";
import { LoginIcon } from "../../components/LoginIcon/LoginIcon";
import { LoginForm } from "../../components/LoginForm/LoginForm";

describe("Login Tests", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
        <Login />
      </Provider>
    );
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("When component is render and registrations not has elements, it must render 1 Icons Header, 1 LoginIcon and 1 Login Form", () => {
    expect(wrapper.find(Login).dive().find(IconsHeader)).toHaveLength(1);
    expect(wrapper.find(Login).dive().find(LoginIcon)).toHaveLength(1);
    expect(wrapper.find(Login).dive().find(LoginForm)).toHaveLength(1);
  });
});
