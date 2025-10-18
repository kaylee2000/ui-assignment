import React from 'react';

export const AnalyticsSkeleton: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-center h-96">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-primary-400 border-t-primary-600 rounded-full animate-spin mx-auto mb-4"></div>
          <div className="text-gray-600 text-lg font-medium">
            Loading Analytics...
          </div>
          <div className="text-gray-500 text-sm mt-2">Fetching chart data</div>
        </div>
      </div>
    </div>
  );
};
