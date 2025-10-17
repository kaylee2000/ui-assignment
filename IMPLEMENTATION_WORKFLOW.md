# Dashboard Implementation Workflow

This document outlines the Git workflow with branches and GitHub issues for implementing the Dashboard with metrics cards and chart component.

## Workflow Overview

Each feature will be developed in its own branch and tracked with a GitHub issue. All branches will be merged into `main` via Pull Requests.

---

## Issues and Branches

### Issue #1: Build MetricCard Component with Types

**Branch**: `feature/metric-card`
**Title**: Create MetricCard component with TypeScript interfaces
**Description**:

```
Build a reusable MetricCard component with proper TypeScript interfaces to display individual metrics with icons and change indicators.

Tasks:
- [ ] Create src/components/MetricCard.tsx
- [ ] Add TypeScript interface for MetricCard props
- [ ] Add TypeScript interface for DashboardMetric data
- [ ] Implement icon display using lucide-react
- [ ] Add change indicator with color coding
- [ ] Wrap with React.memo() for optimization
- [ ] Add responsive styling with Tailwind
- [ ] Temporarily render MetricCard in Dashboard.tsx for testing
- [ ] Verify component displays correctly with hardcoded props

Acceptance Criteria:
- Component accepts title, value, change, changeType, icon props
- TypeScript interfaces are properly defined
- Icons render correctly from lucide-react
- Green indicator for positive change, red for negative
- Component is wrapped in React.memo()
- Responsive design works on mobile/tablet/desktop
- Component displays correctly when tested in Dashboard
- No TypeScript errors
```

---

### Issue #2: Build LineChart Component with Recharts and Types

**Branch**: `feature/line-chart-recharts`
**Title**: Install Recharts and create LineChart component with TypeScript interfaces
**Description**:

```
Install Recharts library and build an interactive LineChart component with proper TypeScript interfaces to display analytics data.

Tasks:
- [ ] Install recharts package
- [ ] Install @types/recharts (if needed)
- [ ] Create src/components/charts/ directory
- [ ] Create src/components/charts/LineChart.tsx
- [ ] Add TypeScript interface for LineChart props
- [ ] Add TypeScript interface for ChartDataPoint data
- [ ] Implement Recharts LineChart with proper configuration
- [ ] Add tooltips for hover interactions
- [ ] Add grid, axis labels, and markers
- [ ] Use primary blue color for line
- [ ] Make chart responsive
- [ ] Wrap with React.memo()
- [ ] Temporarily render LineChart in Dashboard.tsx for testing
- [ ] Verify chart displays correctly with hardcoded props

Acceptance Criteria:
- Recharts is listed in package.json dependencies
- TypeScript interfaces are properly defined
- Chart displays analytics data correctly
- Tooltips show on hover
- Chart is responsive and fills container
- Blue line with circle markers matches design
- Component uses React.memo() for performance
- Chart displays correctly when tested in Dashboard
- No installation or build errors
```

---

### Issue #3: Create Custom Hooks and Connect Dashboard to Real API Data

**Branch**: `feature/dashboard-api-integration`
**Title**: Implement data fetching hooks and connect Dashboard to real API
**Description**:

```
Create custom React hooks for API data fetching and replace dummy data in Dashboard with real API data.

Tasks:
- [ ] Create src/hooks/useMetrics.ts
- [ ] Create src/hooks/useAnalytics.ts
- [ ] Implement error handling with try-catch
- [ ] Add useMemo for data transformation
- [ ] Return { data, loading, error, refetch }
- [ ] Add proper TypeScript interfaces for hooks
- [ ] Update src/pages/Dashboard.tsx
- [ ] Import and use useMetrics() and useAnalytics() hooks
- [ ] Replace dummy metrics data with API data
- [ ] Replace dummy chart data with API data
- [ ] Add loading state UI (skeleton or spinner)
- [ ] Add error state UI with error message
- [ ] Use useCallback for event handlers
- [ ] Implement route-level lazy loading with React.lazy() and Suspense
- [ ] Add loading fallback UI for lazy-loaded routes
- [ ] Test with real API server running

Acceptance Criteria:
- Both hooks fetch data from correct API endpoints
- Loading states work correctly
- Error handling captures API failures
- refetch function allows manual data refresh
- Data is memoized for performance
- Dashboard fetches and displays real metrics data
- Dashboard fetches and displays real chart data
- Loading states show while data is fetching
- Error states show if API calls fail
- All components work with real data
- Routes are lazy-loaded with proper Suspense boundaries
- Loading fallbacks display during route transitions
- No TypeScript errors
- Page is responsive on all screen sizes
```

## Development Order

**Recommended order of implementation:**

1. **Issue #1** - Build MetricCard Component with Types (base component + types)
2. **Issue #2** - Add Dummy Data for Metrics (test component)
3. **Issue #3** - Build LineChart Component with Recharts and Types (chart component + types)
4. **Issue #4** - Add Dummy Data for Chart (test chart)
5. **Issue #5** - Create Custom Hooks and Connect Dashboard to Real API Data (API integration)

## Testing Checklist

Before merging each PR, verify:

- [ ] `npm run dev` - Development server runs without errors
- [ ] `npm run lint` - No linting errors
- [ ] `npm run build` - Production build succeeds
- [ ] `npm test` - All tests pass
- [ ] Manual testing in browser
- [ ] Responsive design works (mobile, tablet, desktop)
- [ ] No console errors or warnings

---

## Notes

- Keep PRs focused and small for easier review
- Update this document if workflow changes
- All branches should be deleted after merge
- Regularly sync with `main` to avoid conflicts
