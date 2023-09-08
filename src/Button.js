import React from 'react';

function Button({ color, onClick }) {
  return (
    <button
      className={`color-button ${color}`}
      onClick={() => onClick(color)}
    >
      {color}
    </button>
  );
}

export default Button;