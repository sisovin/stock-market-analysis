import React, { useEffect, useState } from 'react';
import MarketTable from '../components/MarketTable';
import MarketSummary from '../components/MarketSummary';
import NewsFeed from '../components/NewsFeed';
import { fetchMarketData } from '../features/market/marketAPI';

const MarketsPage: React.FC = () => {
  const [marketData, setMarketData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMarketData = async () => {
      try {
        const data = await fetchMarketData();
        setMarketData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadMarketData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Market Data</h1>
      <MarketSummary
        totalMarketCap={marketData.reduce((acc, item) => acc + item.marketCap, 0)}
        totalVolume={marketData.reduce((acc, item) => acc + item.volume, 0)}
        marketChange={marketData.reduce((acc, item) => acc + item.change, 0) / marketData.length}
      />
      <MarketTable data={marketData} />
      <NewsFeed />
    </div>
  );
};

export default MarketsPage;
