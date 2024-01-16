
import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import { RootState } from './@types';
import venueReducer from './reducers/venueSlice';

export const store = configureStore({
  reducer: {
    venue: venueReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
