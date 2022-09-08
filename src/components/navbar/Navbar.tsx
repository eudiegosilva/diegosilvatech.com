import * as s from './navbar.styles';

export type NavbarProps = {
  children: React.ReactNode;
};

const Navbar = ({ children }: NavbarProps) => {
  return <s.NavbarWrapper>{children}</s.NavbarWrapper>;
};

export { Navbar };
