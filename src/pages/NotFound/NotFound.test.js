/*eslint-disable */

import React from "react";

import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import { MemoryRouter as Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

import NotFound from "./index";

describe("NotFound", () => {
  beforeEach(() => {
    render(
      <Router>
        <NotFound />
      </Router>
    );
  });
  test("NotFound renders correctly", () => {
    const tree = renderer
      .create(
        <Router>
          <NotFound />
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
