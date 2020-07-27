import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import { slice as headerSlice } from '@src/pages/common/Base/components/Header';

const store = configureStore({
  reducer: {
    header: headerSlice.reducer,
  },
  middleware: [...getDefaultMiddleware(), logger],
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
