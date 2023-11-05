// import { MemoryRouter } from 'react-router-dom';
// import { screen, waitFor } from '@testing-library/react';

// import SignUpPage from './SignUpPage';
// import { render } from '~/testHelpers';
// import { SUBSCRIBED_DATA, UNSUBSCRIBED_DATA } from '~/server/handlers/getMyProfileHandler';

// const mocks = vi.hoisted(() => {
//   return {
//     useGetMyProfile: vi.fn(),
//   };
// });

// vi.mock('./useGetMyProfile', () => ({
//   useGetMyProfile: mocks.useGetMyProfile,
// }));

// describe('SignUpPage', () => {
//   const renderHomePage = () => {
//     render(
//       <MemoryRouter initialEntries={['/']}>
//         <SignUpPage />
//       </MemoryRouter>
//     );
//   };

//   beforeEach(() => {
//     vi.clearAllMocks();
//   });

//   it('사용자 정보가 없으면, "사용자 정보가 없습니다." 를 노출한다.', async () => {
//     mocks.useGetMyProfile.mockImplementation(() => {
//       return {
//         data: undefined,
//       };
//     });

//     renderHomePage();

//     await waitFor(() => {
//       screen.getByText('사용자 정보가 없습니다.');
//     });
//   });

//   it('사용자가 구독을 하지않은 상태라면, "구독하러 가기" CTA 가 보인다.', async () => {
//     mocks.useGetMyProfile.mockImplementation(() => {
//       return {
//         data: UNSUBSCRIBED_DATA,
//       };
//     });

//     renderHomePage();

//     await waitFor(() => {
//       screen.getByRole('button', {
//         name: '구독하러 가기',
//       });
//     });
//   });

//   it('사용자가 구독을 한 상태라면, "환영합니다" 를 노출한다.', async () => {
//     mocks.useGetMyProfile.mockImplementation(() => {
//       return {
//         data: SUBSCRIBED_DATA,
//       };
//     });

//     renderHomePage();

//     await waitFor(() => {
//       screen.getByText('환영합니다.');
//     });
//   });
// });

describe('', () => {
  it('', () => {
    // ...
  });
});
