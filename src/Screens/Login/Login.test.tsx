import { mount, ReactWrapper, shallow, ShallowWrapper } from "enzyme";
import Login from "./Login";
import { Button } from "@mui/material";
import ShallowMock from "../../../utility/test-utils";
import { Provider } from "react-redux";
import store from "../../store/store";

describe("CertificatesButtons Tests", () => {
  /*  jest.mock("react-redux", () => ({
    useDispatch: () => jest.fn(),
    useSelector: jest.fn(),
  }));

  jest.mock("../../Hooks/useAppHooks", () => ({
    useAppDispatch: () => jest.fn(),
    useAppSelector: jest.fn(),
  }));

  const mockDispatch = appHooks.useAppDispatch as jest.Mock;
  const mockSelector = appHooks.useAppSelector as jest.Mock;
*/
  let wrapper: ReactWrapper;

  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <Login />
      </Provider>
    );
  });

  it("When component is render and registrations not has elements, it must render button", () => {
    console.log(wrapper.debug());

    expect(wrapper.find(Button)).toHaveLength(3);
  });

  it("When component is render and Button is clicked, text should change", () => {
    console.log(wrapper.debug());

    // @ts-ignore
    wrapper.find(Button).at(1).props().onClick();
    wrapper.update();

    console.log(wrapper.find(Button).at(0).find("button").text());

    expect(wrapper.find(Button).at(0).find("button").text()).toEqual("WORKS");
  });
});
