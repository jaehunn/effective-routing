import { lazy } from 'react';

export { default as AppLayout } from './layout';
export { default as AppErrorPage } from './error';

export const AppPage = lazy(() => import('./page'));
