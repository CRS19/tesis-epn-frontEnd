import { Box, Typography } from "@mui/material";
import { mount, ReactWrapper } from "enzyme";
import { before } from "lodash";
import { Provider } from "react-redux";
import { WallpaperSVG } from "../../../public/assets/svg/WallpaperSVG";
import store from "../../store/store";
import { LoginWallpaper } from "./LoginWallpaper";

describe("Login Wallpaper tests", () => {
  let wrapper: ReactWrapper;

  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <LoginWallpaper />
      </Provider>
    );
  });

  it("When the component is render, then it should has 4 Box, 2 Typography and 1 WallpaperSVG ", () => {
    console.log(wrapper.debug());

    expect(wrapper.find(Box).length).toEqual(4);
    expect(wrapper.find(Typography).length).toEqual(2);
    expect(wrapper.find(WallpaperSVG).length).toEqual(1);
  });

  it("When the component is render, then it should has 1 Title and 1 Description", () => {
    expect(wrapper.find(Typography).at(0).text()).toEqual(
      "Distanciamiento FIS"
    );
    expect(wrapper.find(Typography).at(1).text()).toEqual(
      "Bienvenido, lleva control de tu distanciamiento social en la faculatad !TE QUEREMOS SANO!"
    );
  });
});
