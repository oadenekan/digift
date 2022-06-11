// import React from 'react';

const CButton = ({
  children,
  onClick,
  icon,
  small,
  medium,
  buttonText,
  styles,
  type = 'button'
}) => {

  const handleClick = () => {
      return;
  };
  return (
    <button
      type={type}
      onClick={handleClick}
      className=""
      style={{ ...styles }}    >
      {children}
    </button>
  );
};

export default CButton;
