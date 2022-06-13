import { mount, ReactWrapper } from "enzyme";
import { Provider } from "react-redux";
import store from "../../store/store";
import { Avatar } from "./Avatar";
import { IUseAvatar } from "./state/useAvatar.interfaces";
import * as useAvatarHook from "./state/useAvatar";
import { MouseEvent } from "react";
import { ButtonBase, Popover, Typography } from "@mui/material";
import { MainButton } from "../Buttons/MainButton/MainButton";

describe("Avatar tests", () => {
  let wrapper: ReactWrapper;
  let open_avatar_options_mock = jest.fn();
  let close_avatar_options_mock = jest.fn();
  let logout_mock = jest.fn();
  let use_avatar_hook_response: IUseAvatar = {
    id: "avatar-options-popover",
    initials: "CF",
    isOpenAvatarOptions: false,
    anchorElement: null,
    openAvatarOptions: open_avatar_options_mock.mockImplementation(
      (event: MouseEvent<HTMLButtonElement>) => {}
    ),
    closeAvatarOptions: close_avatar_options_mock,
    logOut: logout_mock,
  };

  beforeEach(() => {
    mountComponent();
  });

  afterEach(() => {
    wrapper.unmount();
  });

  const mountComponent = () => {
    wrapper = mount(
      <Provider store={store}>
        <Avatar />
      </Provider>
    );
  };

  it("When te component is render, then should exists 1 ButtonBase, 1 Typography should exists", () => {
    jest
      .spyOn(useAvatarHook, "useAvatar")
      .mockImplementation(() => ({ ...use_avatar_hook_response }));

    mountComponent();

    expect(wrapper.find(ButtonBase).length).toEqual(1);
    expect(wrapper.find(Typography).length).toEqual(1);
    expect(wrapper.find(Popover).length).toEqual(1);
    expect(wrapper.find(Typography).at(0).text()).toEqual(
      use_avatar_hook_response.initials
    );
    expect(wrapper.find(MainButton).length).toEqual(0);
  });
});
