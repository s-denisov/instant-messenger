import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface User {
  email?: string;
}

const initialState: User = {};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ email: string }>) => {
      // eslint-disable-next-line no-param-reassign
      state.email = action.payload.email;
    },
  },
});

export const getEmail = (state: RootState) => state.user.email;
export const loggedIn = (state: RootState) => state.user.email !== undefined;

export const { login } = userSlice.actions;

export default userSlice.reducer;
