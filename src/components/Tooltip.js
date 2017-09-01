import React from 'react';

export const Tooltip = (props) => (
  <span className="tooltips-container">
    <span className="tooltips">
      <span className="tooltips-text">
        {props.title}
      </span>
    </span>
  </span>
);
