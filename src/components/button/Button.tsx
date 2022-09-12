import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

import * as s from './button.styles';

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  as?: 'a' | 'button';
  handleClick?: () => void;
} & ButtonTypes;

const Button = ({
  children,
  as = 'button',
  handleClick,
  ...rest
}: ButtonProps) => {
  return (
    <s.ButtonWrapper as={as} onClick={handleClick} {...rest}>
      {children}
    </s.ButtonWrapper>
  );
};

export { Button };
