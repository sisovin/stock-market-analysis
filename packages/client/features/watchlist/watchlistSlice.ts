import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WatchlistItem {
  symbol: string;
  name: string;
  price: number;
}

interface WatchlistState {
  items: WatchlistItem[];
  loading: boolean;
  error: string | null;
}

const initialState: WatchlistState = {
  items: [],
  loading: false,
  error: null,
};

const watchlistSlice = createSlice({
  name: 'watchlist',
  initialState,
  reducers: {
    fetchWatchlistStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchWatchlistSuccess(state, action: PayloadAction<WatchlistItem[]>) {
      state.loading = false;
      state.items = action.payload;
    },
    fetchWatchlistFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    addItemToWatchlist(state, action: PayloadAction<WatchlistItem>) {
      state.items.push(action.payload);
    },
    removeItemFromWatchlist(state, action: PayloadAction<string>) {
      state.items = state.items.filter(item => item.symbol !== action.payload);
    },
  },
});

export const {
  fetchWatchlistStart,
  fetchWatchlistSuccess,
  fetchWatchlistFailure,
  addItemToWatchlist,
  removeItemFromWatchlist,
} = watchlistSlice.actions;

export default watchlistSlice.reducer;
