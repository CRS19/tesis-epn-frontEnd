import { mount, ReactWrapper } from "enzyme";
import { Box, Button } from "@mui/material";
import { Provider } from "react-redux";
import store from "../../store/store";
import { CornerBalls } from "./CornerBalls";

describe("CornerBalls Tests", () => {
  let wrapper: ReactWrapper;

  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <CornerBalls />
      </Provider>
    );
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("When the component is render, it should have 3 Boxes", () => {
    expect(wrapper.find(Box)).toHaveLength(3);
  });
});
