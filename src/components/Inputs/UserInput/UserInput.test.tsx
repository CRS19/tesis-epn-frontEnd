import { TextField } from "@mui/material";
import { act } from "@testing-library/react";
import { mount, ReactWrapper } from "enzyme";
import { Provider } from "react-redux";
import store from "../../../store/store";
import { UserInput } from "./UserInput";

describe("UserInput Tests", () => {
  let wrapper: ReactWrapper;
  let set_mail_mock: jest.Mock;

  beforeEach(() => {
    set_mail_mock = jest.fn().mockImplementation((text: string) => {});

    wrapper = mount(
      <Provider store={store}>
        <UserInput setEmail={set_mail_mock} />
      </Provider>
    );
  });

  afterEach(() => {
    jest.clearAllMocks();

    wrapper.unmount();
  });

  it("When the component is render, then should have 1 textfield whit Ingrese email as placeholder", () => {
    expect(wrapper.find(TextField)).toHaveLength(1);
    expect(wrapper.find("label").at(0).text()).toEqual("Ingrese email");
  });

  it("When the text in component has change, then setEmail should be called", () => {
    act(() => {
      //@ts-ignore
      wrapper.find(TextField).prop("onChange")({
        //@ts-ignore
        target: { value: "elpepemail" },
      });
    });

    expect(set_mail_mock).toHaveBeenCalledWith("elpepemail");
  });
});
