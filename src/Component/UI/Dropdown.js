import React from 'react';

const Dropdown = (props) => {
  return (
    <select
      defaultValue=''
      name={props.name}
      className='form-control'
      onChange={props.changeHandler}
    >
      <option>-- Select --</option>
      {props.list.map((cur, key) => (
        <option key={key} value={cur}>
          {cur}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
