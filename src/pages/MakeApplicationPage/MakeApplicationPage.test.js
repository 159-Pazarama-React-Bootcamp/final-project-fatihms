/*eslint-disable */

import React from "react";

import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import { MemoryRouter as Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

import MakeApplicationPage from "./index";

describe("MakeApplicationPage", () => {
  beforeEach(() => {
    render(
      <Router>
        <MakeApplicationPage />
      </Router>
    );
  });
  test("MakeApplicationPage renders correctly", () => {
    const tree = renderer
      .create(
        <Router>
          <MakeApplicationPage />
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
