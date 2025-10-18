import React from 'react';
import {
  CartesianGrid,
  Line,
  LineChart as RechartsLineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { ChartData } from '../../types';

interface LineChartProps {
  data: ChartData[];
  title?: string;
  height?: number;
}

// Custom tooltip component with proper TypeScript types
const CustomTooltip = ({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: Array<{
    value: number;
    dataKey: string;
    color: string;
  }>;
  label?: string;
}) => {
  if (active && payload && payload.length) {
    const data = payload[0];
    return (
      <div
        className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg"
        role="tooltip"
        aria-label={`Chart data for ${label}: ${data.value}`}
      >
        <p className="text-sm font-medium text-gray-900 mb-1">{label}</p>
        <p className="text-sm text-primary-600 font-semibold">
          {data.value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

const LineChart: React.FC<LineChartProps> = React.memo(
  ({ data, title = 'Analytics Overview', height = 400 }) => {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">{title}</h3>
        <ResponsiveContainer width="100%" height={height}>
          <RechartsLineChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 20,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis
              dataKey="label"
              stroke="#6b7280"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#6b7280"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={value => `${value}`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#3b82f6"
              strokeWidth={3}
              dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: '#3b82f6', strokeWidth: 2 }}
            />
          </RechartsLineChart>
        </ResponsiveContainer>
      </div>
    );
  }
);

LineChart.displayName = 'LineChart';

export default LineChart;
