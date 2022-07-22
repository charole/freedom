import ButtonView from './ButtonView.style';

type ButtonType = 'submit' | 'button';
type ButtonPropsType = {
  label: string;
  type: ButtonType;
  // eslint-disable-next-line react/no-unused-prop-types
  onClick?: (e: unknown) => void; // onClick 쓸수도 안쓸수도 있음.
};

const Button = ({ label, type, onClick }: ButtonPropsType) => {
  if (onClick) {
    return (
      <ButtonView
        onClick={(e) => {
          onClick(e);
        }}
      >
        {label}
      </ButtonView>
    );
  }
  return <ButtonView type={type}>{label}</ButtonView>;
};

export default Button;
