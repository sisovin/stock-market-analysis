import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { fetchWatchlist } from '../features/watchlist/watchlistAPI';
import { WatchlistItem } from '../features/watchlist/watchlistSlice';
import Watchlist from '../components/Watchlist';
import useAppDispatch from '../hooks/useAppDispatch';

const WatchlistPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const watchlist = useSelector((state: RootState) => state.watchlist.items);
  const loading = useSelector((state: RootState) => state.watchlist.loading);
  const error = useSelector((state: RootState) => state.watchlist.error);

  useEffect(() => {
    dispatch(fetchWatchlist());
  }, [dispatch]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">My Watchlist</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && <Watchlist items={watchlist} />}
    </div>
  );
};

export default WatchlistPage;
