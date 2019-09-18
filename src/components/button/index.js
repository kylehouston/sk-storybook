import React from 'react';
import { string, func } from 'prop-types';
import './button.module.scss';

const propTypes = {
  children: string,
  btnClassNames: string,
  onClick: func
};

const defaultProps = {
  children: 'Click Me.',
  btnClassNames: '',
  onClick: () => {}
};

const Button = ({ children, btnClassNames, onClick, ...rest }) => {
  return (
    <button onClick={onClick} {...rest} styleName="button">
      {children}
    </button>
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
