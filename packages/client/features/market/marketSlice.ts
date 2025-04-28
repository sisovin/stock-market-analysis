import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MarketState {
  data: any[];
  loading: boolean;
  error: string | null;
}

const initialState: MarketState = {
  data: [],
  loading: false,
  error: null,
};

const marketSlice = createSlice({
  name: 'market',
  initialState,
  reducers: {
    fetchMarketDataStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchMarketDataSuccess(state, action: PayloadAction<any[]>) {
      state.loading = false;
      state.data = action.payload;
    },
    fetchMarketDataFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchMarketDataStart,
  fetchMarketDataSuccess,
  fetchMarketDataFailure,
} = marketSlice.actions;

export default marketSlice.reducer;
