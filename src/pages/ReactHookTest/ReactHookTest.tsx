import React, {
  FormEvent,
  useState,
  useRef,
  ChangeEvent,
  useEffect,
} from 'react';

const ReactHookTest = () => {
  // useState를 이용하여 state변수를 선언함.
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  // useRef를 통해 리액트에서 DOM에 접근할 수 있음. (current객체를 이용함.)
  const nameRef = useRef<HTMLInputElement>(null); // useRef사용할 경우 null을 추가한다.
  const ageRef = useRef<HTMLInputElement>(null);

  const handlerSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 이벤트 기본 동작하지 않도록
    // ageRef.current가 null인지 검사가 필요함.
    if (ageRef.current) {
      ageRef.current.focus();
      ageRef.current.style.background = 'red';
    }
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'name') {
      setName(value);
    }

    if (name === 'age') {
      setAge(parseInt(value, 10));
    }
  };

  // state변수 name 또는 age가 변경될때 동작함.
  useEffect(() => {
    console.info(name, age);
  }, [name, age]);

  return (
    <form onSubmit={handlerSubmit}>
      <p>이름: {name}</p>
      <p>나이: {age}</p>
      <input
        type="text"
        id="name"
        name="name"
        ref={nameRef}
        value={name}
        onChange={onChange}
      />
      <input
        type="text"
        id="age"
        name="age"
        ref={ageRef}
        value={age}
        onChange={onChange}
      />
      <button type="submit">제출</button>
    </form>
  );
};

export default ReactHookTest;
