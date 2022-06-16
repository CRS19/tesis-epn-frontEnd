import { Grid, Typography } from "@mui/material";
import { shallow, ShallowWrapper } from "enzyme";
import { Provider } from "react-redux";
import { IErrorFormLinkDevice } from "../../Screens/LinkDevice/state/useLinkDevice.interfaces";
import store from "../../store/store";
import { MainButton } from "../Buttons/MainButton/MainButton";
import { PassInput } from "../Inputs/PassInput/PassInput";
import { UserInput } from "../Inputs/UserInput/UserInput";
import { RegisterText } from "../Texts/RegisterText/RegisterText";
import { LinkDeviceForm } from "./LinkDeviceForm";

describe("CornerBalls Tests", () => {
  let wrapper: ShallowWrapper;
  let login_mock = jest.fn();
  let idDevice = "123";
  let hasIdDevice = true;
  let handle_input_id_device = jest
    .fn()
    .mockImplementation((text: string) => {});
  let on_submit = jest.fn().mockImplementation(() => {});
  let error_form_mock: IErrorFormLinkDevice = {
    error: false,
    textError: "Text test",
  };

  beforeEach(() => {
    shallowComponent();
  });

  afterEach(() => {
    wrapper.unmount();
  });

  const shallowComponent = () => {
    wrapper = shallow(
      <Provider store={store}>
        <LinkDeviceForm
          errorForm={error_form_mock}
          idDevice={idDevice}
          hasIdDevice={hasIdDevice}
          handleInputIdDevice={handle_input_id_device}
          onSubmit={on_submit}
        />
      </Provider>
    );
    wrapper = wrapper.find(LinkDeviceForm).dive();
  };

  it("When the component is reder whit hasIdDevice in true, it should exist 1 User Input, 1 Password Input, 1 MainButton and 1 RegisterText components", () => {
    expect(wrapper.find(Typography)).toHaveLength(1);
    expect(wrapper.find(Grid)).toHaveLength(4);
    expect(wrapper.find(MainButton)).toHaveLength(1);
  });

  it("When the component is reder whit hasIdDevice in false, it should exist 1 User Input, 1 Password Input, 1 MainButton and 1 RegisterText components", () => {
    hasIdDevice = false;
    shallowComponent();

    expect(wrapper.find(Typography)).toHaveLength(3);
    expect(wrapper.find(Grid)).toHaveLength(5);
    expect(wrapper.find(MainButton)).toHaveLength(1);
  });
});
