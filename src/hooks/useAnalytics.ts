import { useCallback, useEffect, useMemo, useState } from 'react';
import { ChartData } from '../types';
import { api, ApiError } from '../utils/api';

interface UseAnalyticsReturn {
  data: ChartData[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export const useAnalytics = (): UseAnalyticsReturn => {
  const [data, setData] = useState<ChartData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAnalytics = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      // Add 1 second delay to see the loading spinner
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Uncomment the line below to test error state
      //   throw new Error('Analytics error for demo purposes');
      //   const response = await api.get<DashboardMetric[]>('/analytics-broken'); // This will cause 404 error

      const response = await api.get<ChartData[]>('/analytics');
      setData(response);
    } catch (err) {
      const errorMessage =
        err instanceof ApiError
          ? `Failed to fetch analytics: ${err.message}`
          : 'An unexpected error occurred while fetching analytics';
      setError(errorMessage);
      console.error('Error fetching analytics:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  // refetch is just an alias for fetchAnalytics - no need for additional useCallback
  const refetch = fetchAnalytics;

  // Fetch data on mount
  useEffect(() => {
    fetchAnalytics();
  }, [fetchAnalytics]);

  // Memoize the return object to prevent unnecessary re-renders
  return useMemo(
    () => ({
      data,
      loading,
      error,
      refetch,
    }),
    [data, loading, error, refetch]
  );
};
