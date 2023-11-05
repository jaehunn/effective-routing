import { ReactElement } from 'react';
import { render as RTLrender } from '@testing-library/react';

import { QueryClientProvider } from './lib';

export const render = (element: ReactElement) => {
  return RTLrender(<QueryClientProvider>{element}</QueryClientProvider>);
};
