import { ChangeEvent, useState } from 'react';

const useForm = <T>(initalValue: T) => {
  const [form, setForm] = useState(initalValue);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const { type = '' } = e.target.dataset;

    let targetValue: string | number = '';
    switch (type) {
      case 'number':
        targetValue = parseInt(value, 10);
        break;
      default:
        targetValue = value;
        break;
    }

    setForm((prev) => ({
      ...prev,
      [name]: targetValue,
    }));
  };

  return [form, changeHandler, setForm] as const;
};

export default useForm;
