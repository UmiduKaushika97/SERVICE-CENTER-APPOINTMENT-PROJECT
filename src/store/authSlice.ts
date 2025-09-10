import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    token : string | null;
    user: {
        uid:string;
        email:string | null;
        userType: "SuperAdmin" | "Admin" | "User" | null;
    } | null;

}


const initialState: AuthState = {
  token: null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (
      state: AuthState,
      action: PayloadAction<{
        token: string;
        uid: string;
        email: string | null;
        userType: "SuperAdmin" | "Admin" | "User";
      }>
    ) => {
      state.token = action.payload.token;
      state.user = {
        uid: action.payload.uid,
        email: action.payload.email,
        userType: action.payload.userType,
      };
    },
    logout: (state: AuthState) => {
      state.token = null;
      state.user = null;
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;