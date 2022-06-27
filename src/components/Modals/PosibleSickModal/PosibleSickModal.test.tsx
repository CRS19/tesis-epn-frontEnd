import { Grid, Typography } from "@mui/material";
import { mount, ReactWrapper } from "enzyme";
import { Provider } from "react-redux";
import store from "../../../store/store";
import { PosibleSickModal } from "./PosibleSickModal";
import { IPosibleSickModalProps } from "./PosibleSickModal.interfaces";

describe("PosibleSickModal Tests", () => {
  let wrapper: ReactWrapper;
  let onCloseMock = jest.fn();

  beforeEach(() => {
    mountComponent({});
  });

  afterEach(() => {
    wrapper.unmount();
    jest.clearAllMocks();
  });

  const mountComponent = (props: Partial<IPosibleSickModalProps>) => {
    wrapper = mount(
      <Provider store={store}>
        <PosibleSickModal isOpen={true} onClose={onCloseMock} {...props} />
      </Provider>
    );
  };

  it("When the component is render, it should has Grid, Typography", () => {
    expect(wrapper.find(Grid).length).toEqual(5);
    expect(wrapper.find(Typography).length).toEqual(2);
  });
});
