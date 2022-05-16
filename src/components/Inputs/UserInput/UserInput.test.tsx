import { TextField } from "@mui/material";
import { mount, ReactWrapper } from "enzyme";
import { Provider } from "react-redux";
import store from "../../../store/store";
import { UserInput } from "./UserInput";

describe("UserInput Tests", () => {
  let wrapper: ReactWrapper;

  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <UserInput />
      </Provider>
    );
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("When the component is render, then should have 1 textfield whit Ingrese email as placeholder", () => {
    expect(wrapper.find(TextField)).toHaveLength(1);
    expect(wrapper.find("label").at(0).text()).toEqual("Ingrese email");
  });
});
