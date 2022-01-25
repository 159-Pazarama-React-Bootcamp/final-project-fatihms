/*eslint-disable */

import React from "react";

import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import { MemoryRouter as Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

import AdminApplicationPage from "./index";

describe("AdminApplicationPage", () => {
  beforeEach(() => {
    render(
      <Router>
        <AdminApplicationPage />
      </Router>
    );
  });
  test("AdminApplicationPage renders correctly", () => {
    const tree = renderer
      .create(
        <Router>
          <AdminApplicationPage />
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
