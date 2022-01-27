import axios from "axios";
import { createContext } from "react";

const Base64Context = createContext();

/* eslint-disable */

export const Base64Provider = ({ children }) => {
  const spliceBase64 = (base64) => {
    const base64Length = base64.length;

    const base64Part1 = base64.slice(0, base64Length / 20);
    const base64Part2 = base64.slice(
      base64Length / 20,
      (base64Length / 20) * 2
    );
    const base64Part3 = base64.slice(
      (base64Length / 20) * 2,
      (base64Length / 20) * 3
    );
    const base64Part4 = base64.slice(
      (base64Length / 20) * 3,
      (base64Length / 20) * 4
    );
    const base64Part5 = base64.slice(
      (base64Length / 20) * 4,
      (base64Length / 20) * 5
    );
    const base64Part6 = base64.slice(
      (base64Length / 20) * 5,
      (base64Length / 20) * 6
    );
    const base64Part7 = base64.slice(
      (base64Length / 20) * 6,
      (base64Length / 20) * 7
    );
    const base64Part8 = base64.slice(
      (base64Length / 20) * 7,
      (base64Length / 20) * 8
    );
    const base64Part9 = base64.slice(
      (base64Length / 20) * 8,
      (base64Length / 20) * 9
    );
    const base64Part10 = base64.slice(
      (base64Length / 20) * 9,
      (base64Length / 20) * 10
    );
    const base64Part11 = base64.slice(
      (base64Length / 20) * 10,
      (base64Length / 20) * 11
    );
    const base64Part12 = base64.slice(
      (base64Length / 20) * 11,
      (base64Length / 20) * 12
    );
    const base64Part13 = base64.slice(
      (base64Length / 20) * 12,
      (base64Length / 20) * 13
    );
    const base64Part14 = base64.slice(
      (base64Length / 20) * 13,
      (base64Length / 20) * 14
    );
    const base64Part15 = base64.slice(
      (base64Length / 20) * 14,
      (base64Length / 20) * 15
    );
    const base64Part16 = base64.slice(
      (base64Length / 20) * 15,
      (base64Length / 20) * 16
    );
    const base64Part17 = base64.slice(
      (base64Length / 20) * 16,
      (base64Length / 20) * 17
    );
    const base64Part18 = base64.slice(
      (base64Length / 20) * 17,
      (base64Length / 20) * 18
    );
    const base64Part19 = base64.slice(
      (base64Length / 20) * 18,
      (base64Length / 20) * 19
    );
    const base64Part20 = base64.slice((base64Length / 20) * 19, base64Length);

    return {
      base64Part1,
      base64Part2,
      base64Part3,
      base64Part4,
      base64Part5,
      base64Part6,
      base64Part7,
      base64Part8,
      base64Part9,
      base64Part10,
      base64Part11,
      base64Part12,
      base64Part13,
      base64Part14,
      base64Part15,
      base64Part16,
      base64Part17,
      base64Part18,
      base64Part19,
      base64Part20,
    };
  };

  const postBase64 = async (base64, id) => {
    const {
      base64Part1,
      base64Part2,
      base64Part3,
      base64Part4,
      base64Part5,
      base64Part6,
      base64Part7,
      base64Part8,
      base64Part9,
      base64Part10,
      base64Part11,
      base64Part12,
      base64Part13,
      base64Part14,
      base64Part15,
      base64Part16,
      base64Part17,
      base64Part18,
      base64Part19,
      base64Part20,
    } = spliceBase64(base64);
    const response = await axios.post(`${API}/${id}/other`, {
      base64Part1: base64Part1,
      base64Part2: base64Part2,
      base64Part3: base64Part3,
      base64Part4: base64Part4,
      base64Part5: base64Part5,
      base64Part6: base64Part6,
      base64Part7: base64Part7,
      base64Part8: base64Part8,
      base64Part9: base64Part9,
      base64Part10: base64Part10,
      base64Part11: base64Part11,
      base64Part12: base64Part12,
      base64Part13: base64Part13,
      base64Part14: base64Part14,
      base64Part15: base64Part15,
      base64Part16: base64Part16,
      base64Part17: base64Part17,
      base64Part18: base64Part18,
      base64Part19: base64Part19,
      base64Part20: base64Part20,
    });
    console.log(response);
  };

  const fetchBase64 = async () => {
    const response = await axios.get(API);
    console.log(response);
  };
  const values = { postBase64, fetchBase64 };

  return (
    <Base64Context.Provider value={values}>{children}</Base64Context.Provider>
  );
};

export default Base64Context;
