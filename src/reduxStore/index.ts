
import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import { RootState } from './@types';
import venueReducer from './reducers/venueSlice';
import menuReducer from './reducers/menuSlice';
import cartReducer from './reducers/cartSlice';

export const store = configureStore({
  reducer: {
    venue: venueReducer,
    menu: menuReducer,
    cart: cartReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
