import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: undefined,
    accessToken: null,
  },
  reducers: {
    authRegister: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
    authLogin: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
    authUpdateUser: (state, { payload }) => ({
      ...state,
      user: payload.user,
      accessToken: payload.accessToken,
    }),
    authFetchMe: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
    authRefreshToken: (state, { payload }) => ({}),
  },
});

export const {
  authRegister,
  authLogin,
  authUpdateUser,
  authFetchMe,
  authRefreshToken,
} = authSlice.actions;
export default authSlice.reducer;
