import { IconButton, TextField } from "@mui/material";
import { mount, ReactWrapper } from "enzyme";
import { Provider } from "react-redux";
import store from "../../../store/store";
import { PassInput } from "./PassInput";
import { act } from "react-dom/test-utils";

describe("PassInput Tests", () => {
  let wrapper: ReactWrapper;
  let set_password_mock: jest.Mock;
  let login_mock = jest.fn();

  beforeEach(() => {
    set_password_mock = jest.fn().mockImplementation((text: string) => {});
    wrapper = mount(
      <Provider store={store}>
        <PassInput setPassword={set_password_mock} login={login_mock} />
      </Provider>
    );
  });

  afterEach(() => {
    jest.clearAllMocks();

    wrapper.unmount();
  });

  it("When the component is render, then must exist only 1 textfield", () => {
    expect(wrapper.find(TextField).length).toEqual(1);
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

  it("When the text in component has change, then setPassword should be called", () => {
    act(() => {
      //@ts-ignore
      wrapper.find(TextField).prop("onChange")({
        //@ts-ignore
        target: { value: "elpepepass" },
      });
    });

    expect(set_password_mock).toHaveBeenCalledWith("elpepepass");
  });

  it("When the user press Enter, then login_mock should be called", () => {
    act(() => {
      //@ts-ignore
      wrapper
        .find(TextField)
        .at(0)
        .props()
        //@ts-ignore
        .onKeyDown({ key: "Enter" });
    });

    wrapper.update();

    expect(login_mock).toHaveBeenCalled();
  });

  it("When the user press whatever key exept Enter, then login_mock should not be called", () => {
    act(() => {
      //@ts-ignore
      wrapper
        .find(TextField)
        .at(0)
        .props()
        //@ts-ignore
        .onKeyDown({ key: "k" });
    });

    wrapper.update();

    expect(login_mock).not.toHaveBeenCalled();
  });
});
