/*eslint-disable */

import React from "react";

import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import { MemoryRouter as Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

import ReferralListPage from "./index";

describe("ReferralListPage", () => {
  beforeEach(() => {
    render(
      <Router>
        <ReferralListPage />
      </Router>
    );
  });
  test("ReferralListPage renders correctly", () => {
    const tree = renderer
      .create(
        <Router>
          <ReferralListPage />
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
