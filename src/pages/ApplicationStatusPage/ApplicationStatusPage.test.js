/*eslint-disable */

import React from "react";

import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import { MemoryRouter as Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

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
});
