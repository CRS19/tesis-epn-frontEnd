import { IconButton, TextField } from "@mui/material";
import { mount, ReactWrapper } from "enzyme";
import { Provider } from "react-redux";
import store from "../../../store/store";
import { PassInput } from "./PassInput";
import { act } from "react-dom/test-utils";

describe("PassInput Tests", () => {
  let wrapper: ReactWrapper;

  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <PassInput />
      </Provider>
    );
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
});
