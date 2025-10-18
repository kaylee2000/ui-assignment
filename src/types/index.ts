export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'moderator';
  status: 'active' | 'inactive' | 'pending';
  avatar?: string;
  createdAt: string;
  lastLogin?: string;
}

export interface DashboardMetric {
  id: string;
  title: string;
  value: number;
  change: number;
  changeType: 'increase' | 'decrease';
  icon: 'users' | 'activity' | 'dollar-sign' | 'trending-up';
}

/**
 * shared type for the MetricCard component and the MetricsGrid component
 */
export type MetricCardProps = Omit<DashboardMetric, 'id'>;

export interface ChartData {
  id: string;
  label: string;
  value: number;
  date: string;
}

export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}
