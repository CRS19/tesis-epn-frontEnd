import "@testing-library/jest-dom";
import { configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import ligthTheme from "./styles/ligthTheme";
import { makeStyles } from "@mui/styles";

configure({ adapter: new Adapter() });

jest.mock("@mui/styles", () => ({
  ...jest.requireActual("@mui/styles"),
  makeStyles: jest.fn(),
}));

(makeStyles as jest.Mock).mockImplementation((fn) => {
  const themeValues = typeof fn === "function" ? fn(ligthTheme) : fn;

  return jest.fn(() => themeValues);
});
