/* eslint-disable react/prop-types */
import * as React from 'react';
import './Button.scss';

interface Props {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
}

const Button: React.FC<Props> = ({ children, onClick }) => {
  return (
    <button className="btn" type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
