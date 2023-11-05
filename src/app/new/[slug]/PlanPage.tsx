import { useLocation } from 'react-router-dom';

const PlanPage = () => {
  const location = useLocation();

  console.log(location.state);

  // TODO: 이미 구독 신청한 유저에 대한 처리.

  return <div>PlanPage</div>;
};

export default PlanPage;
