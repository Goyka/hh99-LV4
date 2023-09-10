import { configureStore } from "@reduxjs/toolkit";
import login from "../redux/slice/loginSlice";

export const store = configureStore({
  reducer: { login: login },
});
