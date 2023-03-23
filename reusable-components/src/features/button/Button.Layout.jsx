import React from 'react';
import { btnSizes } from './button.styles';
import { colorStyles } from '../../global.styles';

function Button({
  color = 'primary',
  size = 'md',
  outline,
  block,
  children,
  ...props
}) {
  const btnStyle = {
    width: 'fit-content',
    border: '1px solid transparent',
    borderRadius: '4px',
    cursor: 'pointer',
    ...btnSizes[size],
    ...colorStyles[color],
  };

  if (block) {
    btnStyle['display'] = 'block';
    btnStyle['width'] = '100%';
  }

  if (outline) {
    btnStyle['backgroundColor'] = 'transparent';
    btnStyle['border'] = `1px solid ${colorStyles[color].backgroundColor}`;
    btnStyle['color'] = colorStyles[color].backgroundColor;
  }

  return (
    <button style={btnStyle} {...props}>
      {children}
    </button>
  );
}

export default Button;
