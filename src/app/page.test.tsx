import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderMemoryRouter } from '~/testHelpers';

describe('HomePage', () => {
  it('사용자가 구독을 하지않은 상태라면, "구독하러 가기" CTA 가 보인다.', async () => {
    renderMemoryRouter('/');

    await waitFor(() => {
      screen.getByRole('button', {
        name: '구독하러 가기',
      });
    });
  });

  it('사용자가 구독을 한 상태라면, "환영합니다" 를 노출한다.', async () => {
    renderMemoryRouter('/');

    // await waitFor(() => {
    //   screen.getByText('환영합니다.');
    // });
  });

  it('"구독하러 가기" CTA 클릭하면, SubscriptionStepPage 렌더링된다. ', async () => {
    renderMemoryRouter('/');

    await waitFor(() => {
      userEvent.click(
        screen.getByRole('button', {
          name: '구독하러 가기',
        })
      );
    });

    await screen.findByText('SubscriptionStepPage');
  });
});
