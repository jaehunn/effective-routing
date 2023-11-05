import { Outlet, useParams } from 'react-router-dom';

import { useRouteGuard } from './useRouteGuard';

const StepLayout = () => {
  const params = useParams();
  useRouteGuard(params);

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default StepLayout;
