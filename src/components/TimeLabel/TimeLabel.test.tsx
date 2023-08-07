import { ReactWrapper, mount } from "enzyme";
import { Provider } from "react-redux";
import store from "../../store/store";
import { TimeLabel } from "./TimeLabel";

describe("TimeLabel tests -", () => {
  let wrapper: ReactWrapper;

  const mountComponent = () => {
    wrapper = mount(
      <Provider store={store}>
        <TimeLabel time="1 minuto" />
      </Provider>
    );
  };

  beforeEach(() => {
    mountComponent();
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("when the component is rendered, then 1 div should be render with the time and should have the correct styles properties", () => {
    expect(wrapper.find("ForwardRef(Typography)").text()).toEqual("1 minuto");
    expect(wrapper.find("ForwardRef(Box)").at(1).props()).toHaveProperty("sx", {
      borderRadius: 100,
      width: "5px",
      height: "5px",
      bgcolor: "#F15950",
      mr: "0.6rem",
    });
  });
});
