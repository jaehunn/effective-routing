import { PropsWithChildren } from 'react';
import {
  QueryClientProvider as ReactQueryClientProvider,
  QueryClient,
} from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

export const QueryClientProvider = ({ children }: PropsWithChildren<unknown>) => {
  return <ReactQueryClientProvider client={queryClient}>{children}</ReactQueryClientProvider>;
};
