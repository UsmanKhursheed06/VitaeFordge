<<<<<<< HEAD
import { configureStore } from "@reduxjs/toolkit";
import resumeReducers from "../features/resume/resumeFeatures";
import userReducers from "../features/user/userFeatures";

export const resumeStore = configureStore({
  reducer: {
    editResume: resumeReducers,
    editUser: userReducers,
  },
});

export const userStore = configureStore({
  reducer: {
    editUser: userReducers,
  },
});
=======
import { configureStore } from "@reduxjs/toolkit";
import resumeReducers from "../features/resume/resumeFeatures";
import userReducers from "../features/user/userFeatures";

export const resumeStore = configureStore({
  reducer: {
    editResume: resumeReducers,
    editUser: userReducers,
  },
});

export const userStore = configureStore({
  reducer: {
    editUser: userReducers,
  },
});
>>>>>>> 78274e8c8b6139a5938b71458a0bfd4f72ab704e
