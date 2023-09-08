import React from 'react';

function Info({ text, color }) {
  return (
    <div id="text" style={{ color: color }}>
      {text}
    </div>
  );
}

export default Info;