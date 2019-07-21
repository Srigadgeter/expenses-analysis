import { lazy } from 'react';

const Home = lazy(() => import('../Home/Home'));
const Dashboard = lazy(() => import('../Dashboard/Dashboard'));
// const MonthReportCreate = lazy(() => import('../MonthReportCreateEdit'));
// const MonthReportView = lazy(() => import('../MonthReportView'));
// const MonthReportEdit = lazy(() => import('../MonthReportCreateEdit'));

export const routes = {
  HOME: {
    path: '/',
    component: Home
  },
  DASHBOARD: {
    path: '/dashboard',
    component: Dashboard
  },
  // MONTH_REPORT_CREATE: {
  //   path: '/month_report/new',
  //   component: MonthReportCreate
  // },
  // MONTH_REPORT_VIEW: {
  //   path: '/month_report/:id',
  //   component: MonthReportView
  // },
  // MONTH_REPORT_EDIT: {
  //   path: '/month_report/:id/edit',
  //   component: MonthReportEdit
  // },
}