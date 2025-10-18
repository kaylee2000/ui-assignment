import { useCallback, useEffect, useMemo, useState } from 'react';
import { DashboardMetric } from '../types';
import { api, ApiError } from '../utils/api';

interface UseMetricsReturn {
  data: DashboardMetric[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export const useMetrics = (): UseMetricsReturn => {
  const [data, setData] = useState<DashboardMetric[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMetrics = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      // Add 1 second delay to see the loading spinner
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Uncomment the lines below to test error state
      // throw new Error('Metrics error for demo purposes'); // This will cause unexpected error
      // const response = await api.get<DashboardMetric[]>('/metrics-broken'); // This will cause 404 error

      const response = await api.get<DashboardMetric[]>('/metrics');
      setData(response);
    } catch (err) {
      const errorMessage =
        err instanceof ApiError
          ? `Failed to fetch metrics: ${err.message}`
          : 'An unexpected error occurred while fetching metrics';
      setError(errorMessage);
      console.error('Error fetching metrics:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch data on mount
  useEffect(() => {
    fetchMetrics();
  }, [fetchMetrics]);

  // Memoize the return object to prevent unnecessary re-renders
  return useMemo(
    () => ({
      data,
      loading,
      error,
      refetch: fetchMetrics,
    }),
    [data, loading, error, fetchMetrics]
  );
};
