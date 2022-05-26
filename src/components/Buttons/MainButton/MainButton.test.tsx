import { Button } from "@mui/material";
import { mount, ReactWrapper } from "enzyme";
import { Provider } from "react-redux";
import store from "../../../store/store";
import { MainButton } from "./MainButton";

describe("MainButton Tests", () => {
  let wrapper: ReactWrapper;
  let mockOnClick: () => {};

  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <MainButton btnText="Text" onClick={mockOnClick} />
      </Provider>
    );
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("When MainButton is render, then it should exist 1 Button", () => {
    expect(wrapper.find(Button).length).toEqual(1);
  });
});
