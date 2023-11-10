import { useParams } from 'react-router-dom';

import SignUpPage from './SignUpPage';
import PlanPage from './PlanPage';
import AddonsPage from './AddonsPage';
import WrapUpPage from './WrapUpPage';
import DonePage from './DonePage';

export const STEPS = {
  /** 구독 신청자 정보 입력 */
  'sign-up': <SignUpPage />,

  /** 구독 플랜/기간 입력 */
  plan: <PlanPage />,

  /** 사용할 플랫폼 입력 */
  addons: <AddonsPage />,

  /** 구독 신청 정보 요약 */
  'wrap-up': <WrapUpPage />,

  /** 구독 완료 */
  done: <DonePage />,
};

export type Params = {
  step: keyof typeof STEPS;
};

const StepPage = () => {
  const params = useParams<Params>();

  return STEPS[params?.step ?? 'sign-up'];
};

export default StepPage;
