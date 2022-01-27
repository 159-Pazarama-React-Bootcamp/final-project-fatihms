/*eslint-disable */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import API from "../../config/api";

import axios from "axios";

export const fetchApplications = createAsyncThunk(
  "applicationData/Applications",
  async () => {
    const response = await axios.get(API);
    return response.data;
  }
);

export const fetchApplication = createAsyncThunk(
  "applicationData/Application",
  async (id) => {
    const response = await axios.get(`${API}/${id}`);
    return response.data;
  }
);

// post application
export const postApplication = createAsyncThunk(
  "applicationData/PostApplication",
  async (application) => {
    const response = await axios.post(API, application);
    // const postImage = await axios.post(
    //   `${API}/${response.data.id}/other`,
    //   application[1]
    // );

    return response.data;
  }
);

// update application
export const updateApplication = createAsyncThunk(
  "applicationData/UpdateApplication",
  async (application) => {
    console.log(application);
    const response = await axios.put(`${API}/${application.id}`, application);
    return response.data;
  }
);

// delete application
export const deleteApplication = createAsyncThunk(
  "applicationData/DeleteApplication",
  async (id) => {
    const response = await axios.delete(`${API}/${id}`);
    return response.data;
  }
);

export const applicationDataSlice = createSlice({
  name: "applicationData",
  initialState: {
    applications: [],
    loading: false,
    error: null,
  },
  reducers: {
    setApplications: (state, action) => {
      state.applications = action.payload;
    },
  },
  extraReducers: {
    [fetchApplications.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchApplications.fulfilled]: (state, action) => {
      state.applications = action.payload;
      state.loading = false;
    },
    [fetchApplications.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
  },
});

export const { setApplications } = applicationDataSlice.actions;
export const selectApplications = (state) => state.applicationData.applications;
export const selectLoading = (state) => state.applicationData.loading;
export const selectError = (state) => state.applicationData.error;

export default applicationDataSlice.reducer;
/* eslint-enable */
