import { MemoryRouter } from 'react-router-dom';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import PlanPage from './PlanPage';
import { render } from '~/testHelpers';
import { UNSUBSCRIBED_DATA } from '~/server/handlers/getMyProfileHandler';

const mocks = vi.hoisted(() => {
  return {
    useOutletContext: vi.fn(),
  };
});

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');

  return {
    ...actual!,
    useOutletContext: mocks.useOutletContext,
  };
});

describe('PlanPage', () => {
  const renderPlanPage = () => {
    render(
      <MemoryRouter initialEntries={['/new/plan']}>
        <PlanPage />
      </MemoryRouter>
    );
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('구독하고 있지 않다면, 구독 플랜을 선택할 수 있다.', async () => {
    mocks.useOutletContext.mockImplementation(() => {
      return {
        myProfileData: UNSUBSCRIBED_DATA,
      };
    });

    renderPlanPage();

    const select = (await screen.findByRole('combobox', {
      name: /Plan/,
    })) as HTMLSelectElement;

    userEvent.selectOptions(select, 'STANDARD');

    await waitFor(() => {
      expect(select.value).toBe('STANDARD');
    });
  });

  it('구독하고 있지 않다면, 구독 기간을 선택할 수 있다.', async () => {
    mocks.useOutletContext.mockImplementation(() => {
      return {
        myProfileData: UNSUBSCRIBED_DATA,
      };
    });

    renderPlanPage();

    const select = (await screen.findByRole('combobox', {
      name: /Period/,
    })) as HTMLSelectElement;

    userEvent.selectOptions(select, 'MONTH');

    await waitFor(() => {
      expect(select.value).toBe('MONTH');
    });
  });
});
