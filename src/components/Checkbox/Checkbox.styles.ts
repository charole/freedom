import styled from 'styled-components';
import { ContainerProps } from './Checkbox.type';

export const Container = styled.label<ContainerProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) => {
    switch (props.placement) {
      case 'top':
        return 'column-reverse';
      case 'left':
        return 'row-reverse';
      case 'right':
        return 'row';
      default:
        return 'column';
    }
  }};
`;
