import React from 'react';

interface MarketData {
  symbol: string;
  price: number;
  volume: number;
}

interface MarketTableProps {
  data: MarketData[];
}

const MarketTable: React.FC<MarketTableProps> = ({ data }) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Symbol
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Price
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Volume
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {data.map((item) => (
          <tr key={item.symbol}>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              {item.symbol}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {item.price}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {item.volume}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MarketTable;
