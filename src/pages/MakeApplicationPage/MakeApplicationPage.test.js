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

import { Provider } from "react-redux";
import store from "../../redux/store";

import MakeApplicationPage from "./index";
import ApplicationForm from "../../containers/ApplicationForm/index";
import InputItem from "../../components/InputItem";
import Header from "../../components/Header/index";

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
  test("Gönder button renders correctly", () => {
    expect(screen.getByText("Gönder")).toBeInTheDocument();
  });
  test("InputItem component length is equal to 8", () => {
    const wrapper = mount(
      <Provider store={store}>
        <Router>
          <MakeApplicationPage />
        </Router>
      </Provider>
    );
    expect(wrapper.find(InputItem)).toHaveLength(8);
  });
  test("Header component renders correctly", () => {
    expect(screen.getByText("Başvuru Oluştur")).toBeInTheDocument();
  });
  test("başvuru sorgula button goes to basvuru sorgula page when clicked", () => {
    const wrapper = mount(
      <Provider store={store}>
        <Router>
          <MakeApplicationPage />
        </Router>
      </Provider>
    );
    const link = wrapper.find("Link").at(0);
    link.simulate("click");
    expect(link.props().to).toBe("/basvuru-sorgula");
  });
  test("renders input with label and placeholder", () => {
    const wrapper = mount(
      <Provider store={store}>
        <Router>
          <MakeApplicationPage />
        </Router>
      </Provider>
    );
    const label = wrapper.find("label").at(0);
    expect(label.text()).toBe("Ad ");
    const input = wrapper.find("input").at(0);
    expect(input.props().placeholder).toBe("Fatih Mustafa");
    const label2 = wrapper.find("label").at(1);
    expect(label2.text()).toBe("Soyad ");
    const input2 = wrapper.find("input").at(1);
    expect(input2.props().placeholder).toBe("Sağır");
    const label3 = wrapper.find("label").at(2);
    expect(label3.text()).toBe("Yaş ");
    const input3 = wrapper.find("input").at(2);
    expect(input3.props().placeholder).toBe("25");
    const label4 = wrapper.find("label").at(3);
    expect(label4.text()).toBe("TC Kimlik No ");
    const input4 = wrapper.find("input").at(3);
    expect(input4.props().placeholder).toBe("25215151515");
    const label5 = wrapper.find("label").at(4);
    expect(label5.text()).toBe("Adres ");
    const input5 = wrapper.find("input").at(4);
    expect(input5.props().placeholder).toBe("Yeşil sok. No:1 / 34");
    const label6 = wrapper.find("label").at(5);
    expect(label6.text()).toBe("Şehir ");
    const input6 = wrapper.find("input").at(5);
    expect(input6.props().placeholder).toBe("İstanbul");
    const label7 = wrapper.find("label").at(6);
    expect(label7.text()).toBe("İlçe ");
    const input7 = wrapper.find("input").at(6);
    expect(input7.props().placeholder).toBe("Beşiktaş");
    const label8 = wrapper.find("label").at(7);
    expect(label8.text()).toBe("Başvuru Nedeni ");
    const input8 = wrapper.find("input").at(7);
    expect(input8.props().placeholder).toBe("Başvuru nedeni");
  });
});
