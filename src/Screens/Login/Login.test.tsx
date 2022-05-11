import { shallow, ShallowWrapper } from "enzyme";
import Login from "./Login";
import { Button } from "@mui/material";

describe("CertificatesButtons Tests", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Login />);
  });

  it("When component is render and registrations not has elements, it must render button", () => {
    console.log(wrapper.debug());

    expect(wrapper.find(Button)).toHaveLength(3);
  });
});
