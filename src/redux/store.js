import { configureStore } from "@reduxjs/toolkit";

import userDataReducer from "./UserData/userDataSlice";

const store = configureStore({
  reducer: { userData: userDataReducer },
});

export default store;
