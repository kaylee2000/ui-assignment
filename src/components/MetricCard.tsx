import { clsx } from 'clsx';
import {
  Activity,
  DollarSign,
  TrendingDown,
  TrendingUp,
  Users,
} from 'lucide-react';
import React from 'react';
import { MetricCardProps } from '../types';

// Icon mapping
const iconMap = {
  users: Users,
  activity: Activity,
  'dollar-sign': DollarSign,
  'trending-up': TrendingUp,
};

// Format number with appropriate suffixes
const formatNumber = (num: number): string => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
};

// Format percentage change
const formatChange = (change: number): string => {
  const sign = change > 0 ? '+' : '';
  return `${sign}${change.toFixed(1)}%`;
};

const MetricCard = React.memo(
  ({ title, value, change, changeType, icon }: MetricCardProps) => {
    const IconComponent = iconMap[icon];
    const isPositive = changeType === 'increase';

    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                <IconComponent className="w-6 h-6 text-primary-600" />
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">{title}</p>
              <p className="text-2xl font-bold text-gray-900">
                {formatNumber(value)}
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <div
              className={clsx(
                'flex items-center text-sm font-medium',
                isPositive ? 'text-green-600' : 'text-red-600'
              )}
            >
              {isPositive ? (
                <TrendingUp className="w-4 h-4 mr-1" />
              ) : (
                <TrendingDown className="w-4 h-4 mr-1" />
              )}
              {formatChange(change)}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

MetricCard.displayName = 'MetricCard';

export default MetricCard;
