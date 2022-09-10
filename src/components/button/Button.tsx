import * as s from './button.styles';

export type ButtonProps = {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  handleClick?: () => void;
};

const Button = ({ children, type = 'button', handleClick }: ButtonProps) => {
  return (
    <s.ButtonWrapper type={type} onClick={handleClick}>
      {children}
    </s.ButtonWrapper>
  );
};

export { Button };
