import React from 'react';

const Keyboard = ({ onKeyPress }) => {
  const keys = 'QWERTYUIOPASDFGHJKLZXCVBNM'.split('');
  return (
    <div className="keyboard">
      {keys.map(key => (
        <button key={key} onClick={() => onKeyPress(key)}>
          {key}
        </button>
      ))}
      <button onClick={() => onKeyPress('ENTER')}>Enter</button>
      <button onClick={() => onKeyPress('BACKSPACE')}>Backspace</button>
    </div>
  );
};

export default Keyboard;
