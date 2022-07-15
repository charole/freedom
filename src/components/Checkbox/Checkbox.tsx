import { forwardRef } from 'react';
import { CheckboxProps } from './Checkbox.type';
import { Container } from './Checkbox.styles';

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ name, value, onChange }, ref) => {
    return (
      <Container htmlFor={name}>
        <input
          type="checkbox"
          name={name}
          ref={ref}
          checked={value}
          onChange={onChange}
        />
        Checkbox
      </Container>
    );
  },
);
export default Checkbox;
