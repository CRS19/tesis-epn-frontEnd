import { mount, ReactWrapper } from "enzyme";
import { Provider } from "react-redux";
import store from "../../store/store";
import { LoginIcon } from "./LoginIcon";

describe("LoginIcon Tests", () => {
  let wrapper: ReactWrapper;

  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <LoginIcon />
      </Provider>
    );
  });

  it("When the component is render, it should render LoginIcon.svg", () => {
    expect(wrapper.find("img").at(0).prop("src")).toEqual(
      "../../../icons/LoginIcon.svg"
    );
  });
});
