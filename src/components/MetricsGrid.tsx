import React, { ReactNode } from 'react';
import { MetricCardProps } from '../types';
import MetricCard from './MetricCard';

interface MetricsGridProps {
  metrics: Array<MetricCardProps>;
  refreshButton: ReactNode;
}

const MetricsGrid: React.FC<MetricsGridProps> = React.memo(
  ({ metrics, refreshButton }) => {
    return (
      <>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Key Metrics</h2>
          {refreshButton}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((metric, index) => (
            <MetricCard
              key={index}
              title={metric.title}
              value={metric.value}
              change={metric.change}
              changeType={metric.changeType}
              icon={metric.icon}
            />
          ))}
        </div>
      </>
    );
  }
);

MetricsGrid.displayName = 'MetricsGrid';

export default MetricsGrid;
