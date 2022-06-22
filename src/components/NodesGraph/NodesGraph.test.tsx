import { Box, CircularProgress, Typography } from "@mui/material";
import { mount, ReactWrapper } from "enzyme";
import { Provider } from "react-redux";
import { useAppSelector } from "../../Hooks/useAppHooks";
import { USER_AS_NODES_TEST_OBJ } from "../../Shared/Contants/Tests";
import store from "../../store/store";
import { NodesGraph } from "./NodesGraph";

describe("useHome tests", () => {
  let wrapper: ReactWrapper;
  let mock_store = store.getState();

  beforeEach(() => {
    (useAppSelector as jest.Mock).mockImplementation((fn) => fn(mock_store));

    mountComponent();
  });

  afterEach(() => {
    wrapper.unmount();
    jest.clearAllMocks();
    mock_store = store.getState();
  });

  const mountComponent = () => {
    wrapper = mount(
      <Provider store={store}>
        <NodesGraph idDevice="1" />
      </Provider>
    );
  };

  it("When the component is render, then it should has 4 Box ", () => {
    expect(wrapper.find(Box).length).toEqual(2);
  });

  it("When the component is render, and chart has all data, then it should render a div", () => {
    wrapper.unmount();

    mock_store = {
      generalReducer: {
        ...store.getState().generalReducer,
        isLoading: false,
        graphData: USER_AS_NODES_TEST_OBJ,
      },
    };

    (useAppSelector as jest.Mock).mockImplementation((fn) => fn(mock_store));
    mountComponent();

    expect(wrapper.find(Box).length).toEqual(1);
    expect(wrapper.find(Box).find("div").length).toEqual(2);
  });

  it("When the component is render, then it should has 1 Box ", () => {
    wrapper.unmount();
    mock_store = {
      generalReducer: {
        ...store.getState().generalReducer,
        isLoading: true,
      },
    };

    mountComponent();

    expect(wrapper.find(Box).length).toEqual(3);
    expect(wrapper.find(CircularProgress).length).toEqual(1);
  });

  it("When the component is render and the user has no enough data, then it should render a Typography with text 'No hay suficiente información'", () => {
    wrapper.unmount();
    mock_store = {
      generalReducer: {
        ...store.getState().generalReducer,
        isLoading: false,
        graphData: {
          nodes: [],
          links: [],
        },
      },
    };

    (useAppSelector as jest.Mock).mockImplementation((fn) => fn(mock_store));

    mountComponent();

    wrapper.update();

    expect(wrapper.find(Box).length).toEqual(2);
    expect(wrapper.find(CircularProgress).length).toEqual(0);
    expect(wrapper.find(Typography).first().text()).toEqual(
      "No hay suficiente información"
    );
  });
});
