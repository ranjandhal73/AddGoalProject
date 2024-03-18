import React from 'react';

import './Button.css';

const Button = (props) => {
 
const errorButtonHandler = () =>{
  const buttonStyle = {
    backgroundColor: !props.isValid? 'red' : '#8b005d',
    filter: !props.isValid? 'blur(2px)' : 'none'
  }
  return buttonStyle;
}
  return (
    <button 
    type={props.type} 
    className="button" 
    style={errorButtonHandler()}
    onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
