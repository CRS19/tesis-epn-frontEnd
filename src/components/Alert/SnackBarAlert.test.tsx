import { Alert, Button, Snackbar } from "@mui/material";
import { mount, ReactWrapper } from "enzyme";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import { useAppSelector } from "../../Hooks/useAppHooks";
import { IAppState } from "../../store/reducer/reducer";
import store from "../../store/store";
import { SnackBarAlert } from "./SnackBarAlert";

describe("SnackBarAlert Tests", () => {
  let wrapper: ReactWrapper;
  let mockOnClick: () => {};
  let mock_store = store.getState();

  const mountTestComponent = () => {
    wrapper = mount(
      <Provider store={store}>
        <SnackBarAlert />
      </Provider>
    );
  };
  const mockStore = (store: { generalReducer: IAppState }) => {
    (useAppSelector as jest.Mock).mockImplementation((fn) => fn(store));
  };

  beforeEach(() => {
    (useAppSelector as jest.Mock).mockImplementation((fn) => fn(mock_store));
    mountTestComponent();
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("When SnackBarAlert is render, then it should exist 1 SnackBarAlert component", () => {
    expect(wrapper.find(SnackBarAlert).length).toEqual(1);
  });

  it("When the component is render, the text that shows should be the messageText of the store", () => {
    mockStore({
      generalReducer: {
        ...store.getState().generalReducer,
        snackBarConfig: {
          messageText: "Contraseñas incorrectas",
          severity: "error",
        },
      },
    });

    mountTestComponent();

    expect(wrapper.find(SnackBarAlert).text()).toEqual(
      "Contraseñas incorrectas"
    );
    expect(wrapper.find(Snackbar).first().prop("open")).toEqual(true);
  });

  it("When close icon is clicket, then component should get closed", () => {
    mockStore({
      generalReducer: {
        ...store.getState().generalReducer,
        snackBarConfig: {
          messageText: "Contraseñas incorrectas",
          severity: "error",
        },
      },
    });

    mountTestComponent();
    act(() => {
      // @ts-ignore
      wrapper.find(Snackbar).first().prop("onClose")();
    });
    wrapper.update();

    expect(wrapper.find(Snackbar).first().prop("open")).toEqual(false);
  });

  it("When onClose funtion of alert is called, then component should get closed", () => {
    mockStore({
      generalReducer: {
        ...store.getState().generalReducer,
        snackBarConfig: {
          messageText: "Contraseñas incorrectas",
          severity: "error",
        },
      },
    });

    mountTestComponent();
    act(() => {
      // @ts-ignore
      wrapper.find(Alert).first().prop("onClose")();
    });
    wrapper.update();

    expect(wrapper.find(Snackbar).first().prop("open")).toEqual(false);
  });
});
