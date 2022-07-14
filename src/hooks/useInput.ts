import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';

type ValueType = string | boolean;

const useInput = <T extends ValueType>(
  initalValue: T,
): [T, (e: ChangeEvent<HTMLInputElement>) => void, () => void] => {
  const [input, setInput] = useState<T>(initalValue);
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked, type } = e.currentTarget;
    switch (type) {
      case 'checkbox':
        return setInput(checked as T);
      default:
        return setInput(value as T);
    }
  };
  const reset = () => setInput(initalValue);

  return [input, changeHandler, reset];
};

export default useInput;
