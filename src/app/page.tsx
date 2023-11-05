import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleClickSubscribtionCTA = () => {
    navigate('/new/sign-up');
  };

  return (
    <div>
      <button type="button" onClick={handleClickSubscribtionCTA}>
        구독하러 가기
      </button>
    </div>
  );
};

export default HomePage;
