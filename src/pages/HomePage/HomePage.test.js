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

import HomePage from "./index";

describe("HomePage", () => {
  beforeEach(() => {
    render(
      <Router>
        <HomePage />
      </Router>
    );
  });
  test("HomePage renders correctly", () => {
    const tree = renderer
      .create(
        <Router>
          <HomePage />
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test("Başvuru Oluştur button renders correctly", () => {
    expect(screen.getByText("Başvuru Oluştur")).toBeInTheDocument();
  });
  test("Başvuru Sorgula button renders correctly", () => {
    expect(screen.getByText("Başvuru Sorgula")).toBeInTheDocument();
  });
  test("renders button", () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper.find("button")).toHaveLength(2);
  });

  test("react router link goes to basvuru olustur page when clicked", () => {
    const wrapper = mount(
      <Router>
        <HomePage />
      </Router>
    );
    const link = wrapper.find("Link").at(0);
    link.simulate("click");
    expect(link.props().to).toBe("/basvuru-olustur");
  });
  test("react router link goes to basvuru sorgula page when clicked", () => {
    const wrapper = mount(
      <Router>
        <HomePage />
      </Router>
    );
    const link = wrapper.find("Link").at(1);
    link.simulate("click");
    expect(link.props().to).toBe("/basvuru-sorgula");
  });
});
