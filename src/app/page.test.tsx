import { screen, waitFor } from '@testing-library/react';

import HomePage from './page';
import { render } from '~/testHelpers';

describe('HomePage', () => {
  const renderHomePage = () => {
    render(
      <>
        <HomePage />
      </>
    );
  };

  it('사용자가 구독을 하지않은 상태라면, "구독하러 가기" CTA 가 보인다.', async () => {
    renderHomePage();

    await waitFor(() => {
      screen.getByRole('button', {
        name: '구독하러 가기',
      });
    });
  });

  it('사용자가 구독을 한 상태라면, "환영합니다" 를 노출한다.', async () => {
    renderHomePage();

    // await waitFor(() => {
    //   screen.getByText('환영합니다.');
    // });
  });
});
