import React from 'react';

export const MetricCardSkeleton: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-gray-400 border-t-gray-600 rounded-full animate-spin"></div>
            </div>
          </div>
          <div className="ml-4">
            <div className="h-4 bg-gray-200 rounded w-20 mb-2 animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded w-16 animate-pulse"></div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="h-4 bg-gray-200 rounded w-12 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};
