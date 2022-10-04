import React, { FC, ReactNode } from 'react';

import './Button.css'

interface IProps {
  onClick: () => void;
  className?: string;
  children?: ReactNode;
}

const Button: FC<IProps> = (props) => {
  return (
    <>
      <button {...props} className={'button' + props.className}></button>
    </>
  );
};

export default Button;