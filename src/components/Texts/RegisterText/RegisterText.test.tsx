import { Typography } from "@mui/material";
import { mount, ReactWrapper } from "enzyme";
import { Provider } from "react-redux";
import store from "../../../store/store";
import { RegisterText } from "./RegisterText";

describe("RegisterText Tests", () => {
  let wrapper: ReactWrapper;

  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <RegisterText />
      </Provider>
    );
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("When the component is rendered, it must have ¿No tiene una cuenta? and Registrarse ", () => {
    expect(wrapper.find(Typography).at(0).text()).toEqual(
      "¿No tiene una cuenta? "
    );
    expect(wrapper.find(Typography).at(1).text()).toEqual("Registrarse");
  });

  it("When Registarse Typography is clicked, then it should change the page", () => {
    // @ts-ignore
    wrapper.find(Typography).at(1).props().onClick();

    wrapper.update();

    expect(wrapper.find(Typography).at(0).text()).toEqual(
      "¿No tiene una cuenta? "
    );
    expect(wrapper.find(Typography).at(1).text()).toEqual("Registrarse");
  });
});
