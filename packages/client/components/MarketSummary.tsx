import React from 'react';

interface MarketSummaryProps {
  totalMarketCap: number;
  totalVolume: number;
  marketChange: number;
}

const MarketSummary: React.FC<MarketSummaryProps> = ({ totalMarketCap, totalVolume, marketChange }) => {
  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h2 className="text-lg font-semibold text-gray-700">Market Summary</h2>
      <div className="mt-4">
        <p className="text-sm text-gray-500">Total Market Cap: ${totalMarketCap.toLocaleString()}</p>
        <p className="text-sm text-gray-500">Total Volume: {totalVolume.toLocaleString()}</p>
        <p className={`text-sm ${marketChange >= 0 ? 'text-green-500' : 'text-red-500'}`}>
          Market Change: {marketChange >= 0 ? '+' : ''}{marketChange.toFixed(2)}%
        </p>
      </div>
    </div>
  );
};

export default MarketSummary;
