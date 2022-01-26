/*eslint-disable */

import React from "react";

import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import { MemoryRouter as Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

import { Provider } from "react-redux";
import store from "../../redux/store";

import MakeApplicationPage from "./index";

describe("MakeApplicationPage", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Router>
          <MakeApplicationPage />
        </Router>
      </Provider>
    );
  });
  test("MakeApplicationPage renders correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router>
            <MakeApplicationPage />
          </Router>
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
