import { Grid, Typography } from "@mui/material";
import { mount, ReactWrapper } from "enzyme";
import { Provider } from "react-redux";
import store from "../../../store/store";
import { AlertCard } from "./AlertCard";
import { IAlertCardProps } from "./AlertCard.interfaces";

describe("AlertCard Tests", () => {
  let wrapper: ReactWrapper;
  let onClickMock = jest.fn();

  beforeEach(() => {
    mountComponent({});
  });

  afterEach(() => {
    wrapper.unmount();
    jest.clearAllMocks();
  });

  const mountComponent = (props: Partial<IAlertCardProps>) => {
    wrapper = mount(
      <Provider store={store}>
        <AlertCard onClick={onClickMock} {...props} />
      </Provider>
    );
  };

  it("When the component is render, it should has Grid, Typography", () => {
    expect(wrapper.find(Grid).length).toEqual(3);
    expect(wrapper.find(Typography).length).toEqual(2);
  });
});
