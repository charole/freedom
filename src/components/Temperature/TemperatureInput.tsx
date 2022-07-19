import { ChangeEvent } from 'react';
import { TemperatureInputType } from './Temperature.type';

const temperatureScale = {
  c: 'Celsius',
  f: 'Fahrenheit',
};

const TemperatureInput = ({
  scale,
  temperature,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onTemperChange,
}: TemperatureInputType) => {
  const handlerChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value: number = parseInt(e.target.value, 10); // parseInt(stringValue, 10진수)
    onTemperChange(value); // state를 상위 컴포넌트로 끌어올리기(콜백을 이용함.)
  };

  return (
    <fieldset>
      <legend>{temperatureScale[scale]}</legend>
      <input value={temperature} onChange={handlerChange} />
    </fieldset>
  );
};

export default TemperatureInput;
