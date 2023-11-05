import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// TODO: Validation Check
type FormValues = {
  id: string;
  name: string;
  phone: string;
};

const SignUpPage = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState<FormValues>({
    id: '',
    name: '',
    phone: '',
  });

  const handleChangeInput = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    navigate('/new/plan', {
      state: {
        data: {
          ...formValues,
        },
      },
    });
  };

  const isDisabledCTA = Object.values(formValues).filter((item) => !!item).length !== 3;

  return (
    <form onSubmit={handleSubmitForm}>
      <label>
        <input
          type="text"
          name="id"
          placeholder="ID"
          value={formValues['id']}
          onChange={handleChangeInput}
        />
      </label>

      <label>
        <input
          type="text"
          name="name"
          placeholder="NAME"
          value={formValues['name']}
          onChange={handleChangeInput}
        />
      </label>

      <label>
        <input
          type="text"
          name="phone"
          placeholder="PHONE"
          value={formValues['phone']}
          onChange={handleChangeInput}
        />
      </label>

      <button type="submit" disabled={isDisabledCTA}>
        Next
      </button>
    </form>
  );
};

export default SignUpPage;
