import React, { ReactNode } from 'react';
import { ChartData } from '../types';
import LineChart from './charts/LineChart';

interface ChartSectionProps {
  data: ChartData[];
  title?: string;
  refreshButton: ReactNode;
}

const ChartSection: React.FC<ChartSectionProps> = ({
  data,
  title = 'Analytics Overview',
  refreshButton,
}) => {
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
        {refreshButton}
      </div>
      <LineChart data={data} title={title} />
    </>
  );
};

ChartSection.displayName = 'ChartSection';

export default ChartSection;
