import styled, { css } from 'styled-components';
import { color } from '@/theme';

export const StyledHeader = styled.div`
  padding: 1.5rem;
  color: ${color.gray[9]};
  position: sticky;
  top: 0;
  z-index: 100;
  background: ${color.red[5]};

  background: ${css`
    ({color: {gray}}) => {
      r
    }
  `};
`;
