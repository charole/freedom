import { ChangeEvent } from 'react';
import useCustomHook from '@/hooks/useCustomHook';

const CustomHookTest = () => {
  const [count, setCounter] = useCustomHook<number>(0);
  const [newText, setNewText] = useCustomHook<string>('');

  const handlerClick = () => {
    if (typeof count === 'number') {
      // setCounter(count + 1);
      setCounter(count + 1);
    }
  };

  const handlerChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (typeof newText === 'string') {
      setNewText(value);
    }
  };
  return (
    <div>
      <button type="button" onClick={handlerClick}>
        {count}
      </button>
      <p>테스트: {newText}</p>
      <input type="text" onChange={handlerChange} />
    </div>
  );
};

export default CustomHookTest;
