import React from 'react';

const Button = ({text, color, onClick}) => {
 
  return (
   <button className={color} onClick={onClick} > {text} </button>
  );
}

export default Button;
