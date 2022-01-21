import { configureStore } from "@reduxjs/toolkit";

import codeReducer from "./code/codeSlice";

const store = configureStore({
  reducer: { code: codeReducer },
});

export default store;
