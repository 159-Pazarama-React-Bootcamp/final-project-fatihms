import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 2,
  },
  reducers: {},
});

export default counterSlice.reducer;
