import MetricCard from '../components/MetricCard';
import LineChart from '../components/charts/LineChart';

export default function Dashboard() {
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

      {/* Temporary MetricCard test - remove in Issue #3 */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">MetricCard Test</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard
            title="Total Users"
            value={1240}
            change={12.5}
            changeType="increase"
            icon="users"
          />
          <MetricCard
            title="Active Sessions"
            value={89}
            change={-3.2}
            changeType="decrease"
            icon="activity"
          />
          <MetricCard
            title="Revenue"
            value={24500}
            change={8.7}
            changeType="increase"
            icon="dollar-sign"
          />
          <MetricCard
            title="Conversion Rate"
            value={3.24}
            change={2.1}
            changeType="increase"
            icon="trending-up"
          />
        </div>
      </div>

      {/* Temporary LineChart test - remove in Issue #3 */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">LineChart Test</h2>
        <LineChart data={chartData} title="Analytics Overview" />
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
