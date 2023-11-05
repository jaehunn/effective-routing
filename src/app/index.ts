import { lazy } from 'react';

export { default as HomeLayout } from './layout';
export { default as HomeErrorPage } from './error';

export const HomePage = lazy(() => import('./page'));
