import * as React from 'react';
import './Button.scss';

interface Props {
  children: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  onSubmit?: (event: React.FormEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
}
const Button: React.FC<Props> = ({ children, onClick, className, type = 'button', onSubmit }) => {
  return (
    <button className={`btn ${className}`} type={type} onClick={onClick} onSubmit={onSubmit}>
      {children}
    </button>
  );
};

export default Button;
