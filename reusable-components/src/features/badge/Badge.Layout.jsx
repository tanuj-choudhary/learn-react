import React from 'react';
import { colorStyles } from '../../global.styles';

function Badge({ color = 'primary', pill, children, ...props }) {
  const badgeStyle = {
    width: 'fit-content',
    padding: '4.2px 7.8px',
    borderRadius: '4px',
    fontSize: '12px',
    fontWeight: 700,
    ...colorStyles[color],
  };

  if (pill) {
    badgeStyle['borderRadius'] = '50rem';
  }

  return (
    <span style={badgeStyle} {...props}>
      {children}
    </span>
  );
}

export default Badge;
