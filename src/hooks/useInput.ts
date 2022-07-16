import { ChangeEvent, useState } from 'react';

type ValueType = string | boolean;

const useInput = <T extends ValueType>(initalValue: T) => {
  const [input, setInput] = useState<T>(initalValue);
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked, type } = e.currentTarget;
    let newValue;
    switch (type) {
      case 'checkbox':
        newValue = checked;
        break;
      default:
        newValue = value;
    }
    setInput(newValue as T);
  };
  const reset = () => setInput(initalValue);

  return [input, changeHandler, reset] as const;
};

export default useInput;
