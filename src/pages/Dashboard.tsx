import ChartSection from '../components/ChartSection';
import MetricsGrid from '../components/MetricsGrid';

export default function Dashboard() {
  // Temporary dummy data for metrics testing
  const metricsData = [
    {
      title: 'Total Users',
      value: 1240,
      change: 12.5,
      changeType: 'increase' as const,
      icon: 'users' as const,
    },
    {
      title: 'Active Sessions',
      value: 89,
      change: -3.2,
      changeType: 'decrease' as const,
      icon: 'activity' as const,
    },
    {
      title: 'Revenue',
      value: 24500,
      change: 8.7,
      changeType: 'increase' as const,
      icon: 'dollar-sign' as const,
    },
    {
      title: 'Conversion Rate',
      value: 3.24,
      change: 2.1,
      changeType: 'increase' as const,
      icon: 'trending-up' as const,
    },
  ];

  // Temporary dummy data for chart testing
  const chartData = [
    { id: '1', label: 'Jan', value: 400, date: '2024-01-01' },
    { id: '2', label: 'Feb', value: 300, date: '2024-02-01' },
    { id: '3', label: 'Mar', value: 600, date: '2024-03-01' },
    { id: '4', label: 'Apr', value: 800, date: '2024-04-01' },
    { id: '5', label: 'May', value: 500, date: '2024-05-01' },
    { id: '6', label: 'Jun', value: 750, date: '2024-06-01' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-900">
        🚀 Dashboard Working!
      </h1>
      <p className="mt-4 text-gray-600">
        If you can see this, the React app is working correctly.
      </p>

      {/* Metrics Section */}
      <div className="mt-8">
        <MetricsGrid metrics={metricsData} />
      </div>

      {/* Chart Section */}
      <div className="mt-8">
        <ChartSection data={chartData} title="Analytics Overview" />
      </div>

      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h2 className="text-lg font-semibold text-blue-900">Next Steps:</h2>
        <ul className="mt-2 text-blue-800">
          <li>• The development server is running on http://localhost:3000</li>
          <li>• The mock API is running on http://localhost:3001</li>
          <li>• Check the README.md for assignment instructions</li>
        </ul>
      </div>
    </div>
  );
}
