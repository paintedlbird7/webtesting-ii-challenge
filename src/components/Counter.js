import React from 'react';

const Counter = props => {
  return (
    <div>
      <h2>{props.title}</h2>
      <h3>Count: {props.count}</h3>
    </div>
  );
};

export default Counter;
