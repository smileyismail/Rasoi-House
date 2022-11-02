import { createSlice } from "@reduxjs/toolkit";

import { userData } from "../utils/localStorage";

const userInfo = userData();
const initialAuthenticationSlice = { user: userInfo };

const authenticationSlice = createSlice({
  name: "authentication slice",
  initialState: initialAuthenticationSlice,
  reducers: {
    getLoginData(state, action) {
      state.user = action.payload;
    },
  },
});

export const authenticationSliceActions = authenticationSlice.actions;

export default authenticationSlice;
