import { ChangeEvent, FormEvent, useState, useEffect, useRef } from 'react';
import useCustomHook from '@/hooks/useCustomHook';
import { IUserInfo } from './CustomHookTest.interface';

const CustomHookTest = () => {
  const [count, setCounter] = useCustomHook<number>(0);
  const [newText, setNewText] = useCustomHook<string>('');

  // useRef는 리액트에서 DOM객체를 직접 가리켜서 focus메서드를 사용하거나, 변경되더라도 리렌더링이 발생하지 않도록 값을 저장하기 위해.
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const [objState, setObjState] = useState<Partial<IUserInfo>>({});

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

  // useEffect : 렌더링 이외의 effect를 발생하는 함수
  useEffect(() => {
    console.info('objState가 변경되었습니다.');
    console.info(objState);
  }, [objState]);

  const handlerSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 강제 형 캐스팅 HTMLInputElement
    const { value: nameValue } = nameRef.current as HTMLInputElement;
    let { value: ageValue } = ageRef.current as HTMLInputElement;

    // ageValue가 NaN이면 0으로 초기화
    if (ageValue === '') {
      ageValue = '0';
    }
    const newObject: Partial<IUserInfo> = {
      name: nameValue,
      age: parseInt(ageValue, 10),
    };
    setObjState((prevObject: Partial<IUserInfo>) => {
      return {
        ...prevObject,
        ...newObject,
      };
    });
  };
  return (
    <div style={{ border: '1px solid black', padding: '50px' }}>
      <button type="button" onClick={handlerClick}>
        {count}
      </button>
      <p>테스트: {newText}</p>
      <input type="text" onChange={handlerChange} />
      <form onSubmit={handlerSubmit}>
        <input type="text" id="name" name="name" ref={nameRef} />
        <input type="text" id="age" name="age" ref={ageRef} />
        <button type="submit">제출</button>
      </form>
    </div>
  );
};

export default CustomHookTest;
