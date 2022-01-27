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

import ApplicationSuccessfulPage from "./index";
import TableItem from "../../components/TableItem";
import Result from "../../containers/Result";
import Header from "../../components/Header";

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
