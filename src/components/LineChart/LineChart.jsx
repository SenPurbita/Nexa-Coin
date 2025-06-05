import React, { useEffect, useState } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceDot
} from 'recharts';
import { useNavigate } from 'react-router-dom';
import './LineChart.css';

const LineChart = ({ coinId, historicalData }) => {
  const [chartData, setChartData] = useState([]);
  const [highPoint, setHighPoint] = useState(null);
  const [lowPoint, setLowPoint] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (historicalData?.prices) {
      const formattedData = historicalData.prices.map(([timestamp, price]) => ({
        date: new Date(timestamp).toLocaleDateString().slice(0, -5),
        price: parseFloat(price.toFixed(2)),
      }));

      setChartData(formattedData);

      const prices = formattedData.map(d => d.price);
      const max = Math.max(...prices);
      const min = Math.min(...prices);

      setHighPoint(formattedData.find(d => d.price === max));
      setLowPoint(formattedData.find(d => d.price === min));
    }
  }, [historicalData]);

  const handleChartClick = () => {
    navigate(`/technical/${coinId}`);
  };

  return (
    <div className="coin-area-chart-container" onClick={handleChartClick} style={{ cursor: 'pointer' }}>
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart data={chartData}>
          <defs>
            <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00c6ff" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#0072ff" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis domain={['auto', 'auto']} />
          <Tooltip />

          <Area
            type="monotone"
            dataKey="price"
            stroke="#0072ff"
            fillOpacity={1}
            fill="url(#colorPrice)"
            animationDuration={1500}
          />

          {highPoint && (
            <ReferenceDot
              x={highPoint.date}
              y={highPoint.price}
              r={6}
              fill="green"
              stroke="white"
              label={{
                value: `High: $${highPoint.price}`,
                fill: 'green',
                position: 'top',
                fontSize: 12
              }}
            />
          )}

          {lowPoint && (
            <ReferenceDot
              x={lowPoint.date}
              y={lowPoint.price}
              r={6}
              fill="red"
              stroke="white"
              label={{
                value: `Low: $${lowPoint.price}`,
                fill: 'red',
                position: 'bottom',
                fontSize: 12
              }}
            />
          )}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChart;
