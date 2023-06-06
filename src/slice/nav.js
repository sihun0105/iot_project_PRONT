import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    systemcategoryIndex: -1,
    coachingcategoryIndex: -1,
    showmemberli : false,
    showcoachingli : false,
    showserviceli : false,
    showpayli : false,
    showpostli : false,
    showsystemli : false,
};
const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setSystemCategoryIndex: (state, action) => {
        state.systemcategoryIndex = action.payload;
      },
    setCoachingCategoryIndex: (state, action) => {
        state.coachingcategoryIndex = action.payload;
      },
    updatememberli(state,action) {
      state.showmemberli = action.payload;
    },
    updatecoachingli(state,action) {
      state.showcoachingli = action.payload;
    },
    updateserviceli(state,action) {
      state.showserviceli = action.payload;
    },
    updatepayli(state,action) {
      state.showpayli = action.payload;
    },
    updatepostli(state,action) {
      state.showpostli = action.payload;
    },
    updatesystemli(state,action) {
      state.showsystemli = action.payload;
    },
    closeli(state){
      state.showmemberli = false;
      state.showcoachingli = false;
      state.showserviceli = false;
      state.showpayli = false;
      state.showpostli = false;
      state.showsystemli = false;
    }
  },
});

export default navSlice;