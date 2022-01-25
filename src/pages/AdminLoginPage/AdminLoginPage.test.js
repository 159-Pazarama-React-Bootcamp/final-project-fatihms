/*eslint-disable */

import React from "react";

import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import { MemoryRouter as Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

import AdminLoginPage from "./index";

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
});
