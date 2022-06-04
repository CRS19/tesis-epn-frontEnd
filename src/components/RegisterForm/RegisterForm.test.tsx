import { shallow, ShallowWrapper } from "enzyme";
import { Provider } from "react-redux";
import store from "../../store/store";
import { MainButton } from "../Buttons/MainButton/MainButton";
import { EmailInput } from "../Inputs/EmailInput/EmailInput";
import { FullNameInput } from "../Inputs/FullNameInput/FullNameInput";
import { NewPasswordInput } from "../Inputs/NewPasswordInput/NewPasswordInput";
import { LoginText } from "../Texts/LoginText/LoginText";
import { RegisterForm } from "./RegisterForm";

describe("CornerBalls Tests", () => {
  let wrapper: ShallowWrapper;
  let set_full_name_mock = jest.fn().mockImplementation((text: string) => {});
  let set_email_mock = jest.fn().mockImplementation((text: string) => {});
  let set_new_pass_mock = jest.fn().mockImplementation((text: string) => {});
  let set_confirm_pass = jest.fn().mockImplementation((text: string) => {});
  let register_new_user_mock = jest.fn().mockImplementation(() => {});
  let change_register_form_to_login = jest.fn().mockImplementation(() => {});
  let register_form_props_mock = {
    fullNameInputProps: {
      error: false,
      errorText: "Error text",
      value: "fullname",
      setFullName: set_full_name_mock,
    },
    emailInputProps: {
      error: false,
      errorText: "Error text",
      value: "email",
      setNewEmail: set_email_mock,
    },
    newPasswordProps: {
      error: false,
      errorText: "Error text",
      value: "error value",
      setNewPassword: set_new_pass_mock,
      placeHolder: "elpepepholder",
    },
    confirmPasswordProps: {
      error: false,
      errorText: "Error text",
      value: "error value",
      setConfirmPass: set_confirm_pass,
      placeHolder: "elplacheholder",
    },
    registerNewUser: register_new_user_mock,
    changeRegisterFormToLogin: change_register_form_to_login,
  };

  beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
        <RegisterForm registerFormActions={{ ...register_form_props_mock }} />
      </Provider>
    );
    wrapper = wrapper.find(RegisterForm).dive();
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("When the component is reder, it should exist 1 FullNameInput, 1 EmailInput, 2 NewPasswordInput, 1 MainButton and 1 LoginText components", () => {
    expect(wrapper.find(FullNameInput)).toHaveLength(1);
    expect(wrapper.find(EmailInput)).toHaveLength(1);
    expect(wrapper.find(NewPasswordInput)).toHaveLength(2);
    expect(wrapper.find(MainButton)).toHaveLength(1);
    expect(wrapper.find(LoginText)).toHaveLength(1);
  });
});
