import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'headers',
  initialState: { modal: 'closed' },
  reducers: {
    setModal: (state, action) => ({ ...state, modal: action.payload }),
  },
});

export default modalSlice;
