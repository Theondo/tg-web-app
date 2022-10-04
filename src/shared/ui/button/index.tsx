import React from 'react';

import './Button.css'

const Button = (props: any) => {
  return (
    <div>
      <button {...props} className={'button' + props.className}></button>
    </div>
  );
};

export default Button;