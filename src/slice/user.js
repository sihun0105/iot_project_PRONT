import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  accesstoken: "",
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.name = action.payload.name;
      state.accesstoken = action.payload.accesstoken;
    },
    updateAccessToken(state, action) {
      state.accesstoken = action.payload.accesstoken;
    },
  },
  extraReducers: (builder) => {},
});

export default userSlice;
