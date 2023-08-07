import { ReactWrapper, mount } from "enzyme";
import { Provider } from "react-redux";
import store from "../../../store/store";
import { TableBody } from "./TableBody";
import { ITableBodyProps } from "./TableBody.interfaces";

describe("TableBody tests -", () => {
  let wrapper: ReactWrapper;
  let TableBodyProps: ITableBodyProps = {
    key: 1,
    contact: {
      name: "Cristian Flores",
      date: "2021-10-20",
      duration: "1 minuto",
      idDevice: "SDM-001",
    },
  };

  const mountComponent = () => {
    wrapper = mount(
      <Provider store={store}>
        <TableBody {...TableBodyProps} />
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
      `CF${TableBodyProps.contact.name}`
    );
    expect(wrapper.find("ForwardRef(TableCell)").at(1).text()).toEqual(
      TableBodyProps.contact.duration
    );
    expect(wrapper.find("ForwardRef(TableCell)").at(2).text()).toEqual(
      TableBodyProps.contact.idDevice
    );
    expect(wrapper.find("ForwardRef(TableCell)").at(3).text()).toEqual(
      TableBodyProps.contact.date
    );
    expect(wrapper.find("ForwardRef(TableCell)").at(0).props()).toHaveProperty(
      "sx",
      { color: "#56CCF2", fontSize: "18px", borderBottom: "none" }
    );
  });
});
