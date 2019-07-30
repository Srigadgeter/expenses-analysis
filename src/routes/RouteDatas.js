// Package File Imports
import { lazy } from 'react';

// Component Imports
const SplashScreen = lazy(() => import('../SplashScreen/SplashScreen'));
const Dashboard = lazy(() => import('../Dashboard/Dashboard'));
// const MonthReportCreate = lazy(() => import('../MonthReportCreateEdit'));
// const MonthReportView = lazy(() => import('../MonthReportView'));
// const MonthReportEdit = lazy(() => import('../MonthReportCreateEdit'));

// Route Datas
export const routes = {
  SPLASHSCREEN: {
    path: '/',
    component: SplashScreen
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