import { useState } from 'react';

const useCustomHook = <T extends string | number>(initValue: T) => {
  const [value, setValue] = useState(initValue);

  const changeHandler: (newValue: T) => void = (newValue) => {
    setValue(newValue);
  };

  // 리터럴 타입으로 단언 'as const'
  // 사용자 정의 Hook정의할 경우 리액트에서 제공하는 hook기반으로 개발한다.
  // 반환값은 배열 형태이며 첫번째는 값, 두번째는 변경되는 함수를 전달한다.
  return [value, changeHandler] as const;
};

export default useCustomHook;
