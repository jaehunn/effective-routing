import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  /** FIXME: API Response 로 변경. */
  const hasSubscribe = false;

  const navigate = useNavigate();

  const handleClickSubscribtionCTA = () => {
    navigate('/new/sign-up');
  };

  return (
    <div>
      {hasSubscribe ? (
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
