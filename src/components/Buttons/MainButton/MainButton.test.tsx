import { Button } from "@mui/material";
import { mount, ReactWrapper } from "enzyme";
import { Provider } from "react-redux";
import store from "../../../store/store";
import { MainButton } from "./MainButton";
import { IMainButtonProps } from "./MainButton.interfaces";
import { cornerStyles } from "./MainButton.styles";

describe("MainButton Tests", () => {
  let wrapper: ReactWrapper;
  let mockOnClick: () => {};

  beforeEach(() => {
    mountComponent({});
  });

  afterEach(() => {
    wrapper.unmount();
  });

  const mountComponent = (props: Partial<IMainButtonProps>) => {
    wrapper = mount(
      <Provider store={store}>
        <MainButton btnText="Text" onClick={mockOnClick} {...props} />
      </Provider>
    );
  };

  it("When MainButton is render, then it should exist 1 Button", () => {
    expect(wrapper.find(Button).length).toEqual(1);
  });

  it("When the component is render with borderRadius in true, then it should have borderRadiusStyle styles", () => {
    mountComponent({ borderRadius: true });

    expect(wrapper.find(Button).first().prop("sx")).toStrictEqual(
      cornerStyles.borderRadiusStyle
    );
  });
});
