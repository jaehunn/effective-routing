import { lazy } from 'react';

export const HomePage = lazy(() => import('./page'));

export const SubscriptionStepPage = lazy(() => import('./new/[slug]/page'));
