import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

interface StockChartProps {
  data: { date: string; price: number }[];
}

const StockChart: React.FC<StockChartProps> = ({ data }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: data.map((d) => d.date),
            datasets: [
              {
                label: 'Stock Price',
                data: data.map((d) => d.price),
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
              },
            ],
          },
          options: {
            responsive: true,
            scales: {
              x: {
                type: 'time',
                time: {
                  unit: 'day',
                },
              },
              y: {
                beginAtZero: false,
              },
            },
          },
        });
      }
    }
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default StockChart;
