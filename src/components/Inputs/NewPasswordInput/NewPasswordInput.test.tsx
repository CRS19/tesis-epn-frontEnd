import { Box, TextField, IconButton } from "@mui/material";
import { act } from "@testing-library/react";
import { mount, ReactWrapper } from "enzyme";
import { Provider } from "react-redux";
import store from "../../../store/store";
import { NewPasswordInput } from "./NewPasswordInput";

describe("FullNameInput Tests", () => {
  let wrapper: ReactWrapper;
  let set_mail_mock: jest.Mock;
  let mock_error_text = "text error test";
  let mock_error = false;
  let mock_value = "Email value";

  beforeEach(() => {
    set_mail_mock = jest.fn().mockImplementation((text: string) => {});

    renderTestComponent();
  });

  afterEach(() => {
    jest.clearAllMocks();

    wrapper.unmount();
  });

  const renderTestComponent = () => {
    wrapper = mount(
      <Provider store={store}>
        <NewPasswordInput
          setNewPassword={set_mail_mock}
          value={mock_value}
          error={mock_error}
          errorText={mock_error_text}
        />
      </Provider>
    );
  };

  it("When the component is render, then should have 1 textfield whit Correo Electrónico as placeholder", () => {
    expect(wrapper.find(TextField)).toHaveLength(1);
    expect(wrapper.find("label").at(0).text()).toEqual("Contraseña");
  });

  it("When the text in component has change, then setNewPassword should be called", () => {
    act(() => {
      //@ts-ignore
      wrapper.find(TextField).prop("onChange")({
        //@ts-ignore
        target: { value: "elpepemail" },
      });
    });

    expect(set_mail_mock).toHaveBeenCalledWith("elpepemail");
  });

  it("When the error prop is true, then it should have a margin-bottom equal to 2", () => {
    mock_error = true;
    renderTestComponent();

    expect(wrapper.find(Box).length).toEqual(2);
    expect(wrapper.find(Box).at(0).prop("sx")).toStrictEqual({
      marginTop: 2,
      marginBottom: 2,
    });
  });

  it("When eye icon is clicked, then pass input should change to plain text input", () => {
    act(() => {
      //@ts-ignore
      wrapper.find(IconButton).at(0).props().onClick();
    });

    wrapper.update();

    expect(wrapper.find("img").prop("src")).toEqual(
      "../../../../assets/show-pass.png"
    );
  });
});
