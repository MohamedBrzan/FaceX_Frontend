import { createSlice } from '@reduxjs/toolkit';

// type AuthState = {
//   user: {
//     id: string;
//     name: {
//       first: string;
//       last: string;
//     };
//     email: string;
//     password: string;
//     avatar: string;
//     cover: string;
//   };
// };

const initialState = {
  user: localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user') || '{}')
    : null,
};

const AuthSlice = createSlice({
  name: 'AuthSlice',
  initialState,
  reducers: {
    signInUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(state.user || {}));
    },
    logoutUser: (state: { user: null }) => {
      state.user = null;
      localStorage.clear();
    },
  },
});

export const { signInUser, logoutUser } = AuthSlice.actions;
export default AuthSlice.reducer;
