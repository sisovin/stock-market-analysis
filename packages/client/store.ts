import { configureStore } from '@reduxjs/toolkit';
import marketReducer from './features/market/marketSlice';
import watchlistReducer from './features/watchlist/watchlistSlice';
import authReducer from './features/auth/authSlice';

const store = configureStore({
  reducer: {
    market: marketReducer,
    watchlist: watchlistReducer,
    auth: authReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
