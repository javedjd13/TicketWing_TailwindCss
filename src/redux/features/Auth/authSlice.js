// import { createSlice } from '@reduxjs/toolkit';

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     user: null,
//     token: null,
//   },
//   reducers: {
//     setCredentials: (state, action) => {
//       const { user, token } = action.payload;
//       state.user = user;
//       state.token = token;
//     },
//     logout: (state) => {
//       state.user = null;
//       state.token = null;
//     }
//   }
// });

// export const { setCredentials, logout } = authSlice.actions;
// export default authSlice.reducer;

// auth with localStorage
// import { createSlice } from '@reduxjs/toolkit';

// const userData = localStorage.getItem('auth')
//   ? JSON.parse(localStorage.getItem('auth'))
//   : { user: null, token: null };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     user: userData.user,
//     token: userData.token,
//   },
//   reducers: {
//     setCredentials: (state, action) => {
//       const { user, token } = action.payload;
//       state.user = user;
//       state.token = token;
//       localStorage.setItem('auth', JSON.stringify({ user, token }));
//     },
//     logout: (state) => {
//       state.user = null;
//       state.token = null;
//       localStorage.removeItem('auth');
//     }
//   }
// });

// export const { setCredentials, logout } = authSlice.actions;
// export default authSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';

// const authSlice = createSlice({ name: 'auth', initialState: { user: null, token: null, }, reducers: { setCredentials: (state, action) => { state.user = action.payload.user; state.token = action.payload.token; }, logout: (state) => { state.user = null; state.token = null; }, }, });

// export const { setCredentials, logout } = authSlice.actions; export default authSlice.reducer;