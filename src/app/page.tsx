import { useNavigate } from 'react-router-dom';

import { useGetMyProfile } from './useGetMyProfile';

const HomePage = () => {
  const { data: myProfileData } = useGetMyProfile({
    uid: 1,
  });

  const navigate = useNavigate();

  const handleClickSubscribtionCTA = () => {
    navigate('/new/sign-up');
  };

  if (!myProfileData) {
    return <div>사용자 정보가 없습니다.</div>;
  }

  return (
    <div>
      {myProfileData?.hasSubscribed ? (
        <div>환영합니다.</div>
      ) : (
        <button type="button" onClick={handleClickSubscribtionCTA}>
          구독하러 가기
        </button>
      )}
    </div>
  );
};

export default HomePage;
