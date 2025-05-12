<<<<<<< HEAD
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: "",
};

export const userSlice = createSlice({
  name: "editUser",
  initialState,
  reducers: {
    addUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const { addUserData } = userSlice.actions;

export default userSlice.reducer;
=======
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: "",
};

export const userSlice = createSlice({
  name: "editUser",
  initialState,
  reducers: {
    addUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const { addUserData } = userSlice.actions;

export default userSlice.reducer;
>>>>>>> 78274e8c8b6139a5938b71458a0bfd4f72ab704e
