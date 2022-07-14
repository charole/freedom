import { ChangeEvent } from 'react';

type PlacementType = 'top' | 'left' | 'right' | 'bottom';

export interface CheckboxProps {
  name: string;
  value: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface ContainerProps {
  placement?: PlacementType;
}
