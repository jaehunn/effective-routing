import { useOutletContext } from 'react-router-dom';
import { MyProfileData } from './useGetMyProfile';

type OutletProps = {
  myProfileData: MyProfileData;
};

const DonePage = () => {
  const { myProfileData } = useOutletContext<OutletProps>();

  console.log(myProfileData);

  return <div>DonePage</div>;
};

export default DonePage;
