import { Grid, Typography } from "@mui/material";
import { mount, ReactWrapper } from "enzyme";
import { Provider } from "react-redux";
import store from "../../../store/store";
import { SickModal } from "./SickModal";
import { ISickModalProps } from "./SickModal.interfaces";

describe("PosibleSickModal Tests", () => {
  let wrapper: ReactWrapper;
  let onCloseMock = jest.fn();
  let onYesPressMock = jest.fn();

  beforeEach(() => {
    mountComponent({});
  });

  afterEach(() => {
    wrapper.unmount();
    jest.clearAllMocks();
  });

  const mountComponent = (props: Partial<ISickModalProps>) => {
    wrapper = mount(
      <Provider store={store}>
        <SickModal
          isOpen={true}
          onClose={onCloseMock}
          onYesPress={onYesPressMock}
          title="title"
          subTitle="subTitle"
          {...props}
        />
      </Provider>
    );
  };

  it("When the component is render, it should has Grid, Typography", () => {
    expect(wrapper.find(Grid).length).toEqual(6);
    expect(wrapper.find(Typography).length).toEqual(3);
  });
});
