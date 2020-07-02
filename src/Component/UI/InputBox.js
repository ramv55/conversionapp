import React from 'react';

const inputBox = (props) => (
  <input
    type='text'
    name={props.name}
    className='form-control'
    placeholder={props.placeholder}
    onChange={props.handleInputChange}
    value={props.value}
  />
);

export default inputBox;
