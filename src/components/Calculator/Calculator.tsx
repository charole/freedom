import { useState } from 'react';
import TemperatureInput from '../Temperature';

const Calculator = () => {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(0);

  const toCelsius = (fahrenheit: number) => {
    setFahrenheit(fahrenheit);
    setCelsius((fahrenheit - 32) / 1.8);
  };

  const toFahrenheit = (celsius: number) => {
    // 섭씨 -> 화씨
    setFahrenheit(celsius * 1.8 + 32);
    setCelsius(celsius);
  };

  return (
    <fieldset>
      <TemperatureInput
        scale="c"
        onTemperChange={toFahrenheit}
        temperature={celsius}
      />
      <TemperatureInput
        scale="f"
        onTemperChange={toCelsius}
        temperature={fahrenheit}
      />
    </fieldset>
  );
};

export default Calculator;
