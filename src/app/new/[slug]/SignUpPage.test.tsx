import { MemoryRouter } from 'react-router-dom';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SignUpPage from './SignUpPage';
import { render } from '~/testHelpers';

describe('SignUpPage', () => {
  const renderSignUpPage = () => {
    render(
      <MemoryRouter initialEntries={['/new/sign-up']}>
        <SignUpPage />
      </MemoryRouter>
    );
  };

  it('유저의 아이디를 입력할 수 있다.', async () => {
    renderSignUpPage();

    const input = screen.getByPlaceholderText('ID');

    userEvent.type(input, 'jaehun2');
  });

  it('유저의 이름을 입력할 수 있다.', async () => {
    renderSignUpPage();

    const input = screen.getByPlaceholderText('NAME');

    userEvent.type(input, 'Jaehun');
  });

  it('유저의 전화번호를 입력할 수 있다.', async () => {
    renderSignUpPage();

    const input = screen.getByPlaceholderText('PHONE');

    userEvent.type(input, '010-1234-5678');
  });

  it('입력 값이 모두 없다면,제출 버튼을 클릭 할 수 없다.', async () => {
    renderSignUpPage();

    const button = screen.getByRole('button', {
      name: 'Next',
    });

    expect(button).toBeDisabled();
  });
});
