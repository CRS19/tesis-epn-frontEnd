import { Typography } from "@mui/material";
import { mount, ReactWrapper } from "enzyme";
import { Provider } from "react-redux";
import store from "../../../store/store";
import { LoginText } from "./LoginText";

describe("RegisterText Tests", () => {
  let wrapper: ReactWrapper;
  let change_login_form_to_register_mock = jest
    .fn()
    .mockImplementation(() => {});

  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <LoginText
          changeRegisterFormToLogin={change_login_form_to_register_mock}
        />
      </Provider>
    );
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("When the component is rendered, it must have ¡Ya tengo una cuenta! and Iniciar Sesión ", () => {
    expect(wrapper.find(Typography).at(0).text()).toEqual(
      "¡Ya tengo una cuenta!"
    );
    expect(wrapper.find(Typography).at(1).text()).toEqual("Iniciar Sesión");
  });

  it("When Registarse Typography is clicked, then it should change the page", () => {
    // @ts-ignore
    wrapper.find(Typography).at(1).props().onClick();

    wrapper.update();

    expect(wrapper.find(Typography).at(0).text()).toEqual(
      "¡Ya tengo una cuenta!"
    );
    expect(wrapper.find(Typography).at(1).text()).toEqual("Iniciar Sesión");
  });
});
