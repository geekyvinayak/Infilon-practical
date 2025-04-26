// src/store/apiDataSlice.js
import { createSlice } from "@reduxjs/toolkit";

const apiDataSlice = createSlice({
  name: "apiData",
  initialState: {
    users: [],
  },
  reducers: {
    setUsers: (state, { payload }) => {
      state.users = payload;
    },
  },
});

export const { setUsers } = apiDataSlice.actions;
export default apiDataSlice.reducer;
