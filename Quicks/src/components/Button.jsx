import React, { Children } from 'react';
import { getClasses } from '../utils/getClasess';

const buttonTypes = {
  primary: 'primary',
  secondary: 'secondary',
};

function Button({ type, variant = 'primary', children, ...rest }) {
  return (
    <button type={type === 'submit' ? 'submit' : 'button'} className={getClasses(['button', `button--${buttonTypes[variant]}`])} {...rest}>
      {children}
    </button>
  );
}

function SelectButton({ children, id, ...rest }) {
  return (
    <select id={id} className={getClasses(['button', 'button-select'])} {...rest}>
      {children}
    </select>
  );
}

export { SelectButton };
export default Button;
