import { lazy } from 'react';

export { default as StepLayout } from './layout';

export const SignUpPage = lazy(() => import('./SignUpPage'));
export const PlanPage = lazy(() => import('./PlanPage'));
export const WrapUpPage = lazy(() => import('./WrapUpPage'));
export const DonePage = lazy(() => import('./DonePage'));
