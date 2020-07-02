import React from 'react';

const Button = (props) => (
  <button
    type={props.type}
    className='btn btn-primary'
    onClick={props.clickHandler}
    disabled={props.disabled}
  >
    {props.text}
  </button>
);

export default Button;
