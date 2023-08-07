import { ReactWrapper, mount } from "enzyme";
import { Provider } from "react-redux";
import store from "../../store/store";
import { ContactsTable } from "./ContactsTable";
import { IContactsTableProps } from "./ContactsTable.interfaces";

describe("Contacts Table tests -", () => {
  let wrapper: ReactWrapper;
  let contactsTableProps: IContactsTableProps = {
    contacts: [
      {
        name: "Cristian Flores",
        date: "2021-10-20",
        duration: "1 minuto",
        idDevice: "SDM-001",
      },
      {
        name: "Karol Espin",
        date: "2021-10-20",
        duration: "1 minuto",
        idDevice: "SDM-001",
      },
    ],
  };

  const mountComponent = () => {
    wrapper = mount(
      <Provider store={store}>
        <ContactsTable {...contactsTableProps} />
      </Provider>
    );
  };

  beforeEach(() => {
    mountComponent();
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("when the component is rendered, then it should render 3 rows of the table with the correct information in each cell", () => {
    expect(wrapper.find("ForwardRef(TableRow)").length).toEqual(3);
    expect(wrapper.find("ForwardRef(TableCell)").length).toEqual(12);
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
    expect(wrapper.find("ForwardRef(TableCell)").at(4).text()).toEqual(
      `CF${contactsTableProps.contacts[0].name}`
    );
    expect(wrapper.find("ForwardRef(TableCell)").at(5).text()).toEqual(
      contactsTableProps.contacts[0].duration
    );
    expect(wrapper.find("ForwardRef(TableCell)").at(6).text()).toEqual(
      contactsTableProps.contacts[0].idDevice
    );
    expect(wrapper.find("ForwardRef(TableCell)").at(7).text()).toEqual(
      contactsTableProps.contacts[0].date
    );
    expect(wrapper.find("ForwardRef(TableCell)").at(8).text()).toEqual(
      `KE${contactsTableProps.contacts[1].name}`
    );
    expect(wrapper.find("ForwardRef(TableCell)").at(9).text()).toEqual(
      contactsTableProps.contacts[1].duration
    );
    expect(wrapper.find("ForwardRef(TableCell)").at(10).text()).toEqual(
      contactsTableProps.contacts[1].idDevice
    );
    expect(wrapper.find("ForwardRef(TableCell)").at(11).text()).toEqual(
      contactsTableProps.contacts[1].date
    );
  });
});
