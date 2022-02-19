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

import AdminLoginPage from "./index";
import AdminLogin from "../../containers/AdminLogin";
import ButtonItem from "../../components/ButtonItem";
import InputItem from "../../components/InputItem";

describe("AdminLoginPage", () => {
  beforeEach(() => {
    render(
      <Router>
        <AdminLoginPage />
      </Router>
    );
  });
  test("AdminLoginPage renders correctly", () => {
    const tree = renderer
      .create(
        <Router>
          <AdminLoginPage />
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test("giriş yap button renders correctly", () => {
    expect(screen.getByText("Giriş Yap")).toBeInTheDocument();
  });
});
