import { forwardRef } from 'react';
import { Container } from './Checkbox.styles';
import { CheckboxProps } from './Checkbox.type';

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
