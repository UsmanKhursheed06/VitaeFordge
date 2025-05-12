<<<<<<< HEAD
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  resumeData:""
};
export const resumeSlice = createSlice({
  name: "editResume",
  initialState,
  reducers: {
    addResumeData: (state, action) => {
      state.resumeData = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addResumeData } = resumeSlice.actions;

export default resumeSlice.reducer;
=======
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  resumeData:""
};
export const resumeSlice = createSlice({
  name: "editResume",
  initialState,
  reducers: {
    addResumeData: (state, action) => {
      state.resumeData = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addResumeData } = resumeSlice.actions;

export default resumeSlice.reducer;
>>>>>>> 78274e8c8b6139a5938b71458a0bfd4f72ab704e
