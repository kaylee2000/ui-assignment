import { ChartData } from '../types';
import LineChart from './charts/LineChart';

interface ChartSectionProps {
  data: ChartData[];
  title?: string;
}

const ChartSection = ({
  data,
  title = 'Analytics Overview',
}: ChartSectionProps) => {
  return <LineChart data={data} title={title} />;
};

ChartSection.displayName = 'ChartSection';

export default ChartSection;
