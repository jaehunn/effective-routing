import { useLocation } from 'react-router-dom';

const AddonsPage = () => {
  const location = useLocation();

  console.log(location?.state?.data);

  return <div>AddonsPage</div>;
};

export default AddonsPage;
