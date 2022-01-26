/*eslint-disable */

import React from "react";

import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import { MemoryRouter as Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

import { mount, shallow } from "enzyme";

import ApplicationStatusPage from "./index";

describe("ApplicationStatusPage", () => {
  beforeEach(() => {
    render(
      <Router>
        <ApplicationStatusPage />
      </Router>
    );
  });
  test("ApplicationStatusPage renders correctly", () => {
    const tree = renderer
      .create(
        <Router>
          <ApplicationStatusPage />
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test("Sorgula button renders correctly", () => {
    expect(screen.getByText("Sorgula")).toBeInTheDocument();
  });
  test("renders button", () => {
    const wrapper = mount(
      <Router>
        <ApplicationStatusPage />
      </Router>
    );
    expect(wrapper.find("button")).toHaveLength(1);
  });
  test("has a input", () => {
    const wrapper = mount(
      <Router>
        <ApplicationStatusPage />
      </Router>
    );
    expect(wrapper.find("input")).toHaveLength(1);
  });
  test("passes the correct value to the input", () => {
    const wrapper = mount(
      <Router>
        <ApplicationStatusPage />
      </Router>
    );
    const input = wrapper.find("input");
    expect(input.prop("value")).toBe("");
  });
  test("when you click the button it goes to the value in the input", () => {
    const wrapper = mount(
      <Router>
        <ApplicationStatusPage />
      </Router>
    );
    const input = wrapper.find("input");
    input.simulate("change", { target: { value: "123456789" } });
    const button = wrapper.find("button");
    button.simulate("click");
    expect(button.prop("to")).toBe("/basvuru/123456789");
  });
});
