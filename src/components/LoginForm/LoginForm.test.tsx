import { shallow, ShallowWrapper } from "enzyme";
import { Provider } from "react-redux";
import store from "../../store/store";
import { MainButton } from "../Buttons/MainButton/MainButton";
import { PassInput } from "../Inputs/PassInput/PassInput";
import { UserInput } from "../Inputs/UserInput/UserInput";
import { RegisterText } from "../Texts/RegisterText/RegisterText";
import { LoginForm } from "./LoginForm";

describe("CornerBalls Tests", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
    wrapper = wrapper.find(LoginForm).dive();
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("When the component is reder, it should exist 1 User Input, 1 Password Input, 1 MainButton and 1 RegisterText components", () => {
    expect(wrapper.find(UserInput)).toHaveLength(1);
    expect(wrapper.find(PassInput)).toHaveLength(1);
    expect(wrapper.find(MainButton)).toHaveLength(1);
    expect(wrapper.find(RegisterText)).toHaveLength(1);
  });
});
