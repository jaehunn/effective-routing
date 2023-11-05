import { lazy } from 'react';

export { default as StepLayout } from './layout';
export { default as StepErrorPage } from './error';

export const StepPage = lazy(() => import('./page'));
