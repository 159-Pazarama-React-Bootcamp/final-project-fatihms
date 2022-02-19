import { createSlice } from "@reduxjs/toolkit";
/*eslint-disable */

const userDataSlice = createSlice({
  name: "userData",
  initialState: {
    firstName: "",
    lastName: "",
    age: "",
    tc: "",
    reason: "",
    address: "",
    city: "",
    district: "",
    other: "",
  },
  reducers: {
    addData: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.age = action.payload.age;
      state.tc = action.payload.tc;
      state.reason = action.payload.reason;
      state.address = action.payload.address;
      state.city = action.payload.city;
      state.district = action.payload.district;
      state.other = action.payload.other;
    },
  },
});

export const { addData } = userDataSlice.actions;

export default userDataSlice.reducer;
/* eslint-enable */
