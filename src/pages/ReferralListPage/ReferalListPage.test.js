/*eslint-disable */

import React from "react";

import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import { MemoryRouter as Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

import { Provider } from "react-redux";
import store from "../../redux/store";

import ReferralListPage from "./index";

describe("ReferralListPage", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Router>
          <ReferralListPage />
        </Router>
      </Provider>
    );
  });
  test("ReferralListPage renders correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router>
            <ReferralListPage />
          </Router>
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
