import React from 'react';
import MarketTable from '../components/MarketTable';
import Watchlist from '../components/Watchlist';
import MarketSummary from '../components/MarketSummary';
import NewsFeed from '../components/NewsFeed';
import StockChart from '../components/StockChart';

const HomePage: React.FC = () => {
  const marketData = [
    { symbol: 'AAPL', price: 150, volume: 1000 },
    { symbol: 'GOOGL', price: 2800, volume: 500 },
    { symbol: 'AMZN', price: 3400, volume: 300 },
  ];

  const watchlistItems = [
    { symbol: 'AAPL', name: 'Apple Inc.', price: 150 },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 2800 },
    { symbol: 'AMZN', name: 'Amazon.com Inc.', price: 3400 },
  ];

  const totalMarketCap = 1000000000;
  const totalVolume = 5000000;
  const marketChange = 1.5;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Stock Market Analysis</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <MarketSummary
          totalMarketCap={totalMarketCap}
          totalVolume={totalVolume}
          marketChange={marketChange}
        />
        <MarketTable data={marketData} />
        <Watchlist items={watchlistItems} />
        <NewsFeed />
        <StockChart />
      </div>
    </div>
  );
};

export default HomePage;
