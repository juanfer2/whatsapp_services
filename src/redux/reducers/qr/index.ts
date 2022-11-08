import { createSlice } from '@reduxjs/toolkit';

export const QrSlice = createSlice({
  name: 'qr',
  initialState: { loading: false, url: '', error: null },
  reducers: {
    updateStatusQr: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetStatusQr: () => {
      return { loading: false, url: '', error: null };
    }
  }
});

export const { resetStatusQr, updateStatusQr } = QrSlice.actions;
export default QrSlice.reducer;
