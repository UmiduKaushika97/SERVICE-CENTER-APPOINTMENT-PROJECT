// import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

// interface AuthState {
//     token : string | null;
//     user: {
//         uid:string;
//         email:string | null;
//         userType: "SuperAdmin" | "Admin" | "User" | null;
//     } | null;

// }


// const initialState: AuthState = {
//   token: null,
//   user: null,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     loginSuccess: (
//       state: AuthState,
//       action: PayloadAction<{
//         token: string;
//         uid: string;
//         email: string | null;
//         userType: "SuperAdmin" | "Admin" | "User";
//       }>
//     ) => {
//       state.token = action.payload.token;
//       state.user = {
//         uid: action.payload.uid,
//         email: action.payload.email,
//         userType: action.payload.userType,
//       };
//     },
//     logout: (state: AuthState) => {
//       state.token = null;
//       state.user = null;
//     },
//   },
// });

// export const { loginSuccess, logout } = authSlice.actions;
// export default authSlice.reducer;



import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// interface User {

//   uid: string;
//   email: string | null;
//   userType: "User" | "Admin" | "SuperAdmin";
// }

// interface AuthState {

//   user: User | null;
//   token: string | null;
// }

// const initialState: AuthState = {
//   user: null,
//   token: null,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     setUser: (state, action: PayloadAction<{ user: User; token: string }>) => {
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//     },
//     clearUser: (state) => {
//       state.user = null;
//       state.token = null;
//     },
//   },
// });

// export const { setUser, clearUser } = authSlice.actions;
// export default authSlice.reducer;


// interface User {
//   uid: string;
//   email: string | null;
//   role: "SuperAdmin" | "Admin" | "User"; // 🔴 userType claim
// }

// interface AuthState {
//   user: User | null;
//   token: string | null;
// }

// const initialState: AuthState = {
//   user: null,
//   token: null,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     loginSuccess: (
//       state,
//       action: PayloadAction<{ user: User; token: string }>
//     ) => {
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//     },
//     logout: (state) => {
//       state.user = null;
//       state.token = null;
//     },
//   },
// });

// export const { loginSuccess, logout } = authSlice.actions;
// export default authSlice.reducer;



// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// src/store/authSlice.ts


interface AuthState {
  token: string | null;
  user: {
    uid: string;
    email: string | null;
    userType: string; // admin, superAdmin, user
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
    setCredentials: (
      state,
      action: PayloadAction<{ token: string; user: AuthState["user"] }>
    ) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    clearCredentials: (state) => {
      state.token = null;
      state.user = null;
    },
  },
});

export const { setCredentials, clearCredentials } = authSlice.actions;
export default authSlice.reducer;

