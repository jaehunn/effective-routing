import { useOutletContext } from 'react-router-dom';

import { MyProfileData } from './useGetMyProfile';

type OutletProps = {
  myProfileData: MyProfileData;
};

const WrapUpPage = () => {
  const { myProfileData } = useOutletContext<OutletProps>();

  console.log(myProfileData);

  return <div>WrapUpPage</div>;
};

export default WrapUpPage;
