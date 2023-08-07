import { ReactWrapper, mount } from "enzyme";
import { Provider } from "react-redux";
import store from "../../../store/store";
import { TableHeader } from "./TableHeader";

describe("TableHeader tests -", () => {
  let wrapper: ReactWrapper;

  const mountComponent = () => {
    wrapper = mount(
      <Provider store={store}>
        <TableHeader />
      </Provider>
    );
  };

  beforeEach(() => {
    mountComponent();
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("when the component is rendered, then 4 TableCell should be render and has correct styles", () => {
    expect(wrapper.find("ForwardRef(TableCell)").at(0).text()).toEqual(
      "Contactos"
    );
    expect(wrapper.find("ForwardRef(TableCell)").at(1).text()).toEqual(
      "Duración"
    );
    expect(wrapper.find("ForwardRef(TableCell)").at(2).text()).toEqual(
      "Id del dispositivo"
    );
    expect(wrapper.find("ForwardRef(TableCell)").at(3).text()).toEqual(
      "Fecha de Contacto"
    );
    expect(wrapper.find("ForwardRef(TableCell)").at(0).props()).toHaveProperty(
      "sx",
      { fontSize: "18px" }
    );
  });
});
