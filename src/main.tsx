import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';
import { server } from './server/browser.ts';

/**
 * TODO: Production 이 아닌 환경에서 워커를 실행하도록 설정한다.
 *
 * onUnhandledRequest
 */
server.start({
  onUnhandledRequest: 'bypass',
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
