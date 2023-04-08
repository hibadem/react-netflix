import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/counter/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  devTools: {
    name: 'MyApp',
    trace: true,
    traceLimit: 25,
  },
});
