/*eslint-disable */

import { configureStore } from "@reduxjs/toolkit";

// import userDataReducer from "./UserData/userDataSlice";
import applicationDataSlice from "./ApplicationData/applicationDataSlice";

const store = configureStore({
  reducer: { applicationData: applicationDataSlice },
});

export default store;
/* eslint-enable */
