import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import { LoadingSpinner } from './components/ui/LoadingSpinner';

// Lazy load page components
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Analytics = lazy(() => import('./pages/Analytics'));
const Users = lazy(() => import('./pages/Users'));

// Loading fallback component for route transitions
const RouteLoadingFallback = () => (
  <div className="flex justify-center items-center min-h-64">
    <LoadingSpinner size="lg" />
  </div>
);

function App() {
  return (
    <Layout>
      <Suspense fallback={<RouteLoadingFallback />}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
