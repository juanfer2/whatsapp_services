import { createSlice } from '@reduxjs/toolkit';

export const connectionSlice = createSlice({
  name: 'connection',
  initialState: { status: 'PENDING' },
  reducers: {
    modifyStatusConnection: (_, action) => {
      return action.payload;
    },
    updateStatusConnection: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetStatusConnection: () => {
      return { status: 'PENDING' };
    }
  }
});

export const { modifyStatusConnection, resetStatusConnection, updateStatusConnection } =
  connectionSlice.actions;
export default connectionSlice.reducer;
