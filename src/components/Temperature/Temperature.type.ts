export type TemperatureType = 'c' | 'f';

export type TemperatureInputType = {
  scale: TemperatureType;
  onTemperChange: (value: number) => void;
  temperature: number;
};
