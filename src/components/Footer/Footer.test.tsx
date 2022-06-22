import { Box, Typography } from "@mui/material";
import { mount, ReactWrapper } from "enzyme";
import { Provider } from "react-redux";
import store from "../../store/store";
import { Footer } from "./Footer";

describe("IconsHeader Tests", () => {
  let wrapper: ReactWrapper;

  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <Footer />
      </Provider>
    );
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("When the component is rendered, it should exist 2 logos", () => {
    expect(wrapper.find(Box).length).toEqual(3);
    expect(wrapper.find(Typography).length).toEqual(1);
  });
});
