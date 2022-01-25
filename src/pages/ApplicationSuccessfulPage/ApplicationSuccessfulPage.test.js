/*eslint-disable */

import React from "react";

import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import { MemoryRouter as Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

import ApplicationSuccessfulPage from "./index";

describe("ApplicationSuccessfulPage", () => {
  beforeEach(() => {
    render(
      <Router>
        <ApplicationSuccessfulPage />
      </Router>
    );
  });
  test("ApplicationSuccessfulPage renders correctly", () => {
    const tree = renderer
      .create(
        <Router>
          <ApplicationSuccessfulPage />
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
