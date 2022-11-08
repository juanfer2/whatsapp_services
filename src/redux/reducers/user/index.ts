import { emptyUser } from '@/models/user.type';
import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'connection',
  initialState: { ...emptyUser, loading: false },
  reducers: {
    updateUser: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetUser: () => {
      return { ...emptyUser, loading: false };
    }
  }
});

export const { updateUser, resetUser } = userSlice.actions;
export default userSlice.reducer;
