import React from 'react';

const Button = ({children, ...props}) => {
  return (
    <button onClick={() => alert("hola mundo")} {...props}>children</button>
  )
}

export default Button;
