import React from 'react';
import { MetricCardProps } from '../types';
import MetricCard from './MetricCard';

interface MetricsGridProps {
  metrics: Array<MetricCardProps>;
}

const MetricsGrid: React.FC<MetricsGridProps> = React.memo(({ metrics }) => {
  return (
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
  );
});

MetricsGrid.displayName = 'MetricsGrid';

export default MetricsGrid;
