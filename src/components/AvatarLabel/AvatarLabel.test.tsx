import { ReactWrapper, mount } from "enzyme";
import { Provider } from "react-redux";
import store from "../../store/store";
import { AvatarLabel } from "./AvatarLabel";

describe("AvatarLabel tests -", () => {
  let wrapper: ReactWrapper;

  const mountComponent = () => {
    wrapper = mount(
      <Provider store={store}>
        <AvatarLabel name="John Doe" />
      </Provider>
    );
  };

  beforeEach(() => {
    mountComponent();
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("when the component is rendered, then 2 divs should be render with initials of the user name and should have the correct styles properties", () => {
    expect(wrapper.find("div").at(1).text()).toEqual("JD");
    expect(wrapper.find("div").at(2).text()).toEqual("John Doe");
    expect(wrapper.find("ForwardRef(Box)").at(1).props()).toHaveProperty("sx", {
      display: "flex",
      bgcolor: "#ff007c",
      height: "40px",
      width: "40px",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 100,
      marginRight: "1rem",
    });
  });
});
