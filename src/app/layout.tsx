import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Suspense fallback={''}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default AppLayout;
