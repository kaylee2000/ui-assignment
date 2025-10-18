import ChartSection from '../components/ChartSection';
import MetricsGrid from '../components/MetricsGrid';
import Button from '../components/ui/Button';
import { ErrorMessage } from '../components/ui/ErrorMessage';
import {
  AnalyticsSkeleton,
  MetricCardSkeleton,
} from '../components/ui/skeletons';
import { useAnalytics } from '../hooks/useAnalytics';
import { useMetrics } from '../hooks/useMetrics';

export default function Dashboard() {
  // Fetch metrics and analytics data using custom hooks
  const {
    data: metricsData,
    loading: metricsLoading,
    error: metricsError,
    refetch: refetchMetrics,
  } = useMetrics();

  const {
    data: chartData,
    loading: chartLoading,
    error: chartError,
    refetch: refetchChart,
  } = useAnalytics();

  return (
    <div className="p-6">
      <div className="mb-4">
        <h1 className="text-3xl font-bold text-gray-900">📊 Dashboard</h1>
        <p className="mt-2 text-gray-600">
          Real-time metrics and analytics powered by API data.
        </p>
      </div>

      <div className="mt-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Key Metrics</h2>
          <Button
            variant="outline"
            size="sm"
            onClick={refetchMetrics}
            loading={metricsLoading}
          >
            Refresh
          </Button>
        </div>

        {metricsLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <MetricCardSkeleton key={index} />
            ))}
          </div>
        ) : metricsError ? (
          <ErrorMessage
            message={metricsError}
            onRetry={refetchMetrics}
            className="mb-4"
          />
        ) : (
          <MetricsGrid metrics={metricsData} />
        )}
      </div>

      <div className="mt-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-900">
            Analytics Overview
          </h2>
          <Button
            variant="outline"
            size="sm"
            onClick={refetchChart}
            loading={chartLoading}
          >
            Refresh
          </Button>
        </div>

        {chartLoading ? (
          <AnalyticsSkeleton />
        ) : chartError ? (
          <ErrorMessage
            message={chartError}
            onRetry={refetchChart}
            className="mb-4"
          />
        ) : (
          <ChartSection data={chartData} title="Analytics Overview" />
        )}
      </div>

      {/* API Status Info */}
      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h2 className="text-lg font-semibold text-blue-900">API Status:</h2>
        <ul className="mt-2 text-blue-800">
          <li>• Development server: http://localhost:3000</li>
          <li>• Mock API server: http://localhost:3001</li>
          <li>• Metrics endpoint: /metrics</li>
          <li>• Analytics endpoint: /analytics</li>
        </ul>
      </div>
    </div>
  );
}
