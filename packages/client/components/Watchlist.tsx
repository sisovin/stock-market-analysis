import React from 'react';

interface WatchlistItem {
  symbol: string;
  name: string;
  price: number;
}

interface WatchlistProps {
  items: WatchlistItem[];
}

const Watchlist: React.FC<WatchlistProps> = ({ items }) => {
  return (
    <div className="watchlist">
      <h2 className="text-xl font-bold mb-4">My Watchlist</h2>
      <ul className="divide-y divide-gray-200">
        {items.map((item) => (
          <li key={item.symbol} className="py-4 flex justify-between">
            <div>
              <p className="text-sm font-medium text-gray-900">{item.name}</p>
              <p className="text-sm text-gray-500">{item.symbol}</p>
            </div>
            <div className="text-sm text-gray-500">${item.price.toFixed(2)}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Watchlist;
