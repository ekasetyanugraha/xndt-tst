import React from 'react';

type Color = 'primary' | 'link' | 'info' | 'success' | 'warning' | 'danger';

interface Props {
  color?: Color;
  title?: string;
  children?: JSX.Element | JSX.Element[];
}

export default function Panel({ color = 'primary', title, children }: Props): JSX.Element {
  return (
    <div className={`panel is-${color}`} data-testid="panel">
      {title && <p className="panel-heading">{title}</p>}

      {children && <div className="p-4">{children}</div>}
    </div>
  );
}
